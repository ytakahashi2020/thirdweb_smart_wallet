## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-typescript-starter
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

### Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).


・プロダクト名
ストーリーNFT（仮）のマスアダプション

・タグライン（キャッチフレーズ）

・プロダクト概要

Project Description

このプロジェクトは大きく３つの柱から構成されています。

①AIを使った、ストーリージェネレーティブNFT
②zkEVMを使用したEthereumのスケーラビリティの解消
③新しいウォレットを使った、Web3外の新規ユーザーの獲得と、セキュリティの向上

また、それぞれの課題と達成内容は

①ジェネレーティブNFTの「name」と「description」は機械的なものが多いです。「プロジェクト名　No.00001」など
仮に１万種類のNFTである場合、人が手作業で全てのユニークな「name」や「description」を考えるのは現実的ではありません。

しかし、AIであれば、多くのユニークな「name」や「descriptoin」を作成することが可能です。
また、いくつつくれるかは人間依存の問題ではなく、AI依存の問題となるため、今後さらにAIが進化することにより、より多くの種類を作れるようになると考えています。

例えば今回は、一つ一つのNFTにユニークな「name」と固有のストーリーである、「descriptoin」を持たせています。

さらに、画像は、このストーリーをもとにして、stable diffusionで作成しています。

これにより、ストーリーに沿った画像を作ることにも成功しました。

②zkEVMを使用したスケーラビリティの実現

現在、Ethereumの課題の一つとして、スケーラビリティが挙げられます。
４月に行われた、上海アップグレードなどもスケーラビリティの直接の解決を目的としていないため、いまだに課題が残っております。

これに対応する手段の一つとして、オフチェーン上でEVMに沿ったステート、コントラクトの計算を行い、その証明（proof）をEthereumで検証する、zkEVMがあります。

このzkEVMのプロジェクトの一つとして、今回は「zkSync Era Testnet」を使用しています。

また、OpenSeaをはじめ、zkSync EraのNFTを表示させるプロジェクトが現状ないと考えられるため、ギャラリーページを作成し、NFTの画像を確認できるようにしました。


③新しいウォレットを使用した新規ユーザーの獲得とセキュリティの向上
ここでは、２つの課題の実現を果たしています。
１）新規ユーザーの獲得


How it's Made
　

・デモ動画URL(5分以内)※Loom推奨


・プロダクト画像


・Github repo(open) URL



・使用したtech stacks
AI
・chatGPT(GPT-4)
・stable diffusion
・vectorizeAI

フロントエンド
・vercel
・next.js
・thirdweb

 ブロックチェーン
・Account Abstraction(ERC4337)
・zkEVM
・ローカルウォレット
・メタトランザクション
・OpenZeppelin Defender

・使用したBlockchain

・zksync Era Testnet
・Mumbai

　
　
・deployしたContract(ExplorerでOK）
　⇨後で貼り付ける

・application codeやその他のfile
　⇨Github

・テスト手順を含むリポジトリへのリンク
　⇨Github

・審査やテストのためにプロジェクトにアクセスする方法など
　vercel
