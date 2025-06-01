# TypeORM Migration ガイド

## 設定完了内容

1. **TypeORM設定ファイル** (`src/config/typeorm.config.ts`)
   - `synchronize: false` に設定（migrationを使用するため）
   - `entities` パスを `src/entities/*.entity.ts` に設定（自動読み込み）
   - `migrations` パスを `src/migrations/*.ts` に設定
   - `migrationsTableName` を `migrations` に設定

2. **package.json スクリプト**
   - `migration:generate`: 既存のエンティティから自動でmigrationファイルを生成
   - `migration:create`: 空のmigrationファイルを手動作成
   - `migration:run`: migrationを実行
   - `migration:revert`: 最後のmigrationを取り消し
   - `migration:show`: migration状態を表示

3. **ESLint設定**
   - TypeORM関連のエラーを無効化

## Migration の使用方法

### 1. 初回migration生成（既存のエンティティから）
```bash
npm run migration:generate src/migrations/InitialMigration
```

### 2. 新しいmigrationファイルを手動作成
```bash
npm run migration:create src/migrations/AddNewColumn
```

### 3. Migrationを実行
```bash
npm run migration:run
```

### 4. 最後のmigrationを取り消し
```bash
npm run migration:revert
```

### 5. Migration状態を確認
```bash
npm run migration:show
```

## 注意事項

- `synchronize: false` に設定しているため、エンティティの変更は自動でデータベースに反映されません
- エンティティを変更した場合は、必ずmigrationを生成・実行してください
- 本番環境では必ずmigrationを使用してください
- entitiesは `src/entities/*.entity.ts` パターンで自動読み込みされます
- 新しいエンティティファイルを追加する際は、ファイル名が `*.entity.ts` で終わることを確認してください

## 開発フロー

1. エンティティファイルを変更
2. `npm run migration:generate src/migrations/DescriptiveName` でmigrationを生成
3. 生成されたmigrationファイルを確認・編集（必要に応じて）
4. `npm run migration:run` でmigrationを実行
5. データベースの変更を確認

## トラブルシューティング

- migration実行時にエラーが発生した場合は、`npm run migration:revert` で取り消してから修正
- migration状態がわからない場合は、`npm run migration:show` で確認
