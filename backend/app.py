from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess

app = Flask(__name__)

@app.route('/api/getBranches')
def get_branches():
    try:
        res = subprocess.check_output(['git', 'branch']).decode('utf-8').splitlines()
        branches = [branch.replace('*', '').strip() for branch in res if branch]
        return jsonify({"branches": branches})
    except subprocess.CalledProcessError as e:
        # Handle the subprocess.CalledProcessError
        return jsonify({"error": f"Error running Git command: {e}"})

@app.route('/api/getBranchDiff')
def get_branch_diff():
    from_branch = request.args.get('from_branch', default='')
    to_branch = request.args.get('to_branch', default='')
    try:
        res = subprocess.check_output(['git', 'log', '--pretty=format:%h;%s;%ad;%an;%cd;%cn', 
                                      f'{from_branch}..{to_branch}']).decode('utf-8').splitlines()
        return jsonify({"branchDiff": res})
    except subprocess.CalledProcessError as e:
        # Handle the subprocess.CalledProcessError
        return jsonify({"error": f"Error running Git command: {e}"})
    
if __name__ == '__main__':
    app.run(debug=True)