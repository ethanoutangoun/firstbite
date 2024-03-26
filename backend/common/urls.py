from django.urls import path, re_path
from . import views
from django.contrib import admin

app_name = "common"
urlpatterns = [
    # Define your existing view for the root path
    path("", views.IndexView.as_view(), name="index"),
    path("get-data/", views.get_data, name="get_data"),
    path("admin/", admin.site.urls),
]
