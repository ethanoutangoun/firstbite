from django.urls import path, re_path
from . import views

app_name = "common"
urlpatterns = [
    # Define your existing view for the root path
    path("", views.IndexView.as_view(), name="index"),

    # Add a catch-all pattern to serve the index.html template
    re_path(r'^.*$', views.IndexView.as_view()),
]
