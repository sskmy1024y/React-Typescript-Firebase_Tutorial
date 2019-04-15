import * as React from 'react';
import Board from "./Board";
import './Game.css';

type BoardType = string | null;

/**
 * 可変のデータ
 */
interface State {
    /**
     * 盤面の履歴。BoardType(String[])の配列
     */
    history: Array<{[key: string]: BoardType[]}>;
    /**
     * 次がXかOかを示す。
     */
    xIsNext: boolean;
    /**
     * 手順番号
     */
    stepNumber: number;
}

/**
 * ゲームの基礎クラス。
 */
class Game extends React.Component<{}, State> {
    /**
     * クラス宣言時に実行されるコンストラクタ。
     * @param props 
     */
    constructor(props: {}) {
        super(props);
        // stateの初期化
        this.state = {
            history: [{
                squares: Array<BoardType>(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    /**
     * クリック時の関数。
     * @param {number} i クリックされた場所の座標
     */
    public handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1); // 履歴から直前の手順番号までをシャローコピー
        const current = history[history.length - 1];  // 直前の盤面を取得
        const squares = current.squares.slice();  // 直前の盤面をシャローコピー

        // 勝敗の有無があるか、もしくはクリックされた場所が既に埋まっていれば何もせずreturn
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        // 今の手順にしたがって、XもしくはOの判断をして、マスを埋める
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        // state情報を更新。
        this.setState({
            history: history.concat([
                {
                    squares,
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    /**
     * 手順番号の盤面に戻す
     * @param {number} step 手順番号 
     */
    public jumpTo(step: number) {
        this.setState({
            stepNumber: step, // 手順番号
            xIsNext: (step % 2) === 0,  // 手順番号から遡り次の手順の人に
        });
    }

    /**
     * 描画処理
     */
    public render() {
        const history = this.state.history; // 履歴情報
        const current = history[this.state.stepNumber]; // 直前の盤面情報
        const winner = calculateWinner(current.squares); // 勝敗情報 {any}

        // 履歴情報を描画する為に、Listを変数に格納する
        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move}` : 'Go to game Start';
            const jumpTo = () => this.jumpTo(move);
            return (
                <li key={move}>
                    <button onClick={jumpTo}>{desc}</button>
                </li>
            );
        });

        // ステータス情報を描画する為に、変数に格納
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        // クリックした際の関数を設定
        const onClick = (i:number) => this.handleClick(i);

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={onClick}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

/**
 * 勝敗を確認する為の関数
 * @param {BoardType} squares 
 */
const calculateWinner = (squares: BoardType[]): any => {
    // 勝利に該当するパターンを登録
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // 盤面からパターンに該当するかどうかを判断
    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;