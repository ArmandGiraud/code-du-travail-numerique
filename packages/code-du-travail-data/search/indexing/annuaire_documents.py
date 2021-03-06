import json
import os
import logging

from slugify import slugify
from search import settings

console = logging.StreamHandler()
formatter = logging.Formatter(fmt='[%(levelname)s - %(funcName)s] %(message)s')
console.setFormatter(formatter)

logger = logging.getLogger(__name__)
logger.addHandler(console)
logger.setLevel(logging.INFO)

ANNUAIRE_DOCUMENTS = []

def populate_annuaire_documents():
    with open(os.path.join(settings.BASE_DIR, 'dataset/annuaire/annuaire.data.json')) as json_data:
        data = json.load(json_data)
        logger.info("Load %s documents from annuaire", len(data))
        for val in data:
            ANNUAIRE_DOCUMENTS.append({
                'source': 'annuaire',
                'slug': slugify(val['title'], to_lower=True),
                'id': val['id'],
                'title': val['title'],
                'subtitle': val.get('subtitle'),
                'type': val['type'],
                'address': val['address'],
                'coord': val['coord'],
                'tel': val.get('tel'),
                'email': val.get('email'),
            })


populate_annuaire_documents()
