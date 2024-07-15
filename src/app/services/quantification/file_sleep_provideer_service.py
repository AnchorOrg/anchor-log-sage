import pandas as pd

class CSVSleepDataProviderService(ISleepDataProviderService):
    def __init__(self, file_path):
        self.file_path = file_path

    def get_sleep_data(self, user_id):
        # CSVファイルを読み込む
        df = pd.read_csv(self.file_path)

        # ユーザーIDでフィルタリング（仮にuser_id列があると仮定）
        user_data = df[df['user_id'] == user_id]

        # 必要なデータを抽出
        sleep_data = user_data[['date', 'deepSleepTime', 'shallowSleepTime', 'wakeTime', 'start', 'stop', 'REMTime', 'naps']]

        return sleep_data.to_dict('records')

# 使用例
# アップロードされたCSVファイルのパスを指定
csv_provider = CSVSleepDataProviderService('/mnt/data/SLEEP_1720816810009.csv')

# ユーザーIDに基づいてデータを取得
sleep_data = csv_provider.get_sleep_data('user_id_123')

# 取得したデータを表示
for record in sleep_data:
    print(record)
