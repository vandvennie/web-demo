from flask import Flask, render_template, request, flash
from flask_wtf import FlaskForm # 用于创建表单
from wtforms import StringField, PasswordField, SubmitField# 用于创建表单
from wtforms.validators import DataRequired, EqualTo # 用于验证表单
app = Flask(__name__)
app.secret_key = 'veronica'  # 设置密钥，用于flash加密



@app.route('/')
def home():
    user = User.query.get(1)  # 查询 ID 为 1 的用户
    return render_template('index.html', user=user)



#方案1：WTF-基本表单验证
'''
1.路由需要有get和post方法,需要判断请求方法
2.获取请求的参数
3.验证表单 参数是否填写，密码是否相同
4.如果没有问题就返回一个success
'''
@app.route('/login', methods=['GET', 'POST'])
def login():
    # request: 获取请求对象, 需要最开始 先导入
    # 1.判断请求方式
    if request.method == 'POST':
        # 2.获取请求参数
        username = request.form.get('username')
        password = request.form.get('password')
        password2 = request.form.get('password2')
        # 3.验证表单
        if not all([username, password, password2]):
            flash('Plese fill in all fields')# html模版中需要去遍历消息
        elif password != password2:
            flash('The two passwords do not match')
        else:
              return 'success'

    return render_template('login.html')

#方案2: WTForm-实现表单
class LoginForm(FlaskForm):
    username = StringField('This is your username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    password2 = PasswordField('Confirm Password',validators=[DataRequired(), EqualTo('password', message='Passwords must match')])
    submit = SubmitField('Submit')

@app.route('/wlogin', methods=['GET', 'POST'])
def wtflogin():
    # 加载表单
    login_form = LoginForm()
   
    # post请求
    if request.method == 'POST':
        # 获取请求参数
        username = request.form.get('username')
        password = request.form.get('password')
        password2 = request.form.get('password2')

        if login_form.validate_on_submit():
            return 'success'
        else:
            flash('Plese fill in all fields')
    return render_template('login-wtf.html', form=login_form)

if __name__ == '__main__':
    app.run(debug=True)


