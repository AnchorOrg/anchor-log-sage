from abc import ABC, abstractmethod

class ISleepDataProviderService(ABC):
    @abstractmethod
    def get_sleep_data(self, user_id):
        pass

 