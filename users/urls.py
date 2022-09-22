from django.urls import path
from .views import CustomUserCreate, BlacklistTokenView, LogedInUser

app_name = 'users'

urlpatterns = [
    path("register/", CustomUserCreate.as_view(), name="create_user"),
    path("logout/blacklist/", BlacklistTokenView.as_view(), name="blacklist"),
    path("name/", LogedInUser.as_view(), name="user_name"),
]
