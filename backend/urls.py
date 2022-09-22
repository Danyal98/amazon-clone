from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include('api.urls')),
    path("accounts/", include('accounts.urls')),
    path('accounts/', include('allauth.urls')),
    path("user/", include('users.urls')),
    path('',TemplateView.as_view(template_name = 'index.html')),
    path('login/',TemplateView.as_view(template_name = 'index.html')),
    path('signup/',TemplateView.as_view(template_name = 'index.html')),
]
