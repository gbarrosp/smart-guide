from django.contrib import admin
from .models import Question

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id','title',)
admin.site.register(Question, QuestionAdmin)
