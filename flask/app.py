from flask import Flask, render_template
from models import db, User
import os

basedir = os.path.abspath(os.path.dirname(__file__))
instance_path = os.path.join(basedir, 'instance')
os.makedirs(instance_path, exist_ok=True)

app = Flask(__name__, instance_path=instance_path)
app.secret_key = 'veronica'  # 设置密钥，用于flash加密

# 配置数据库路径
db_path = os.path.join(instance_path, 'app.db')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 初始化数据库扩展
db.init_app(app)


#增
@app.route("/user/add")
def add_user():
    user1 = User(username='Veroninca', email='xixihaha@gmail.com')
    user2 = User(username='Lyu', email='xixi@gmail.com')
    db.session.add_all([user1,user2])# 添加用户
    db.session.commit()# 提交
    return "User added successfully!"

@app.route("/book/add")
def add_book():
    book1 = Book(title='Veroninca', content='123456')
    book2 = Book(title='Lyu', content='123456')
    book1.author = User.query.get(1)  # 设置作者
    book2.author = User.query.get(2)  # 设置作者

    db.session.add_all([book1,book2])
    db.session.commit()
    return "Books added successfully!"
#查
@app.route('/')
def home():
    user = User.query.get(1)  # 查询 ID 为 1 的用户
    return render_template('index.html', user=user)

#改
@app.route('/about')
def update_user():
    user = User.query.filter_by(username='Veroninca').first()  # 查询用户名为 'Veroninca' 的用户
    user.email = "hahaha@gmail.com"# 更新邮箱
    db.session.commit()  # 提交更改
    return render_template('about.html', user=user)

#删
# @app.route('/delete')
# def delete_user():
#     user = User.query.filter_by(username='Veroninca').first()
#     db.session.delete(user)
#     db.session.commit()
#     return "User deleted successfully!"


@app.route('/filter')
def filter():
    user = User.query.filter_by(username='Veroninca').first()  # 查询用户名为 'Veroninca' 的用户
    return render_template('filter.html', user=user)

@app.route('/control')
def control():
    age = 17
    books = Book.query.all()
    return render_template('controlstatement.html', age=age, books=books)

@app.route('/nav')
def nav():
    return render_template('navandfooter.html')

@app.route('/child')
def child():
    return render_template('child.html')


#初始化数据库
if __name__ == '__main__':
    with app.app_context():# 创建应用上下文
        db.create_all() # 创建所有模型定义的表结构
    app.run(debug=True)


