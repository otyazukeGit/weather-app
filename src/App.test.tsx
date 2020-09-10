import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', async () => {
	render(<App />);
	// screen.debug()  //render後のコンポーネントをコンソール出力

	// 画面上テキストのテスト
	expect(screen.getByText('週間天気')).toBeInTheDocument();

	// ボタン + "天気情報" 存在テスト
	expect(screen.getByRole('button', {name: '天気情報'})).toBeInTheDocument();

	// API結果表示領域のdisplay:none 確認
	// （コンポーネント自体の検索はできないのでdata-testid使用
	expect(screen.getByTestId('weatherDays')).toHaveStyle('display:none')  //data-testidは非推奨.

	// ボタン押下 API呼び出し
	userEvent.click(screen.getByRole('button'))
	// API取得の正常結果（"Sun" ~ "Sat"テキストの一部)確認。デフォルト1000msなのでtimeout:3000ms設定
	const result = await screen.findByText('Sun', undefined, {timeout: 3000});
	expect(result).toBeTruthy()

	// （"Sun" ~ "Sat"テキストの一部)確認
	expect(screen.getByText('Mon')).toBeTruthy()

});
