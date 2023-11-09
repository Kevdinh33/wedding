import sys
sys.path.insert(0, 'path')

activate_this = ''
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this_))

from app import app