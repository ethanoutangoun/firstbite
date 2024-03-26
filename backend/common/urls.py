from django.urls import path, re_path
from . import views
from django.contrib import admin

app_name = "common"
urlpatterns = [
    # Define your existing view for the root path
    path("", views.IndexView.as_view(), name="index"),
    path("admin/", admin.site.urls),
]
