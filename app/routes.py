from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
@main.route('/home')
def home():
    return render_template('index.html')

@main.route('/blog')
def blog():
    return render_template('blog.html')

@main.route('/services')
def services():
    return render_template('services.html')

@main.route('/pricing')
def pricing():
    return render_template('pricing.html')

@main.route('/contact')
def contact():
    return render_template('contact.html')

@main.route('/schedule-call')
def schedule_call():
    return render_template('schedule_call.html')

@main.route('/campaign')
def campaign():
    return render_template('campaign.html')
