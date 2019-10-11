from rest_framework import generics
from api.models import Question
from api.serializers import QuestionSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

class QuestionsList(generics.ListCreateAPIView):

    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
