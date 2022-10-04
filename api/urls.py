from django.urls import path
from . import views

urlpatterns = [
    path('listitems/', views.listItems.as_view()),
    path("add-to-basket/<str:pk>/", views.add_to_basket.as_view())
]
