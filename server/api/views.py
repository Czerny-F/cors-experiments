from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def cors(request):
    """API endpoint for experimental CORS"""
    return Response({'response': 'cors'})
