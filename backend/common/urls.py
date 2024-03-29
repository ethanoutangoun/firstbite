from django.urls import path, include, re_path
from . import views
from django.contrib import admin
from django.views.generic import TemplateView


app_name = "common"
urlpatterns = [
    # Define your existing view for the root path
    path("", views.IndexView.as_view(), name="index"),
    path("get-data/", views.get_data, name="get_data"),
    path("admin/", admin.site.urls),
    path("api/equipment/", include("equipment.urls")),
    path("api/", include("users.urls")),
    re_path(r'^.*', views.IndexView.as_view(), name="index"),
]
