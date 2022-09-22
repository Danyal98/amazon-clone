from users.models import NewUser
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.decorators import login_required

# Create your views here.
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }   


@login_required
def social_login_redirect(request):
    try: # this check is supplementary after disabling signup
        user = NewUser.objects.get(username=request.user.username)
        tokens = get_tokens_for_user(user)

        res = redirect(f'/', permanent=True)
        res.set_cookie('access_token', tokens['access'], max_age=60*60*4)
        res.set_cookie('refresh_token', tokens['refresh'], max_age=60*60*4)

        return res
    except Exception as e:
        print(e)
        return HttpResponse("Not allowed")