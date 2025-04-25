from flask_sqlalchemy import SQLAlchemy # type: ignore

db = SQLAlchemy()

#user表
class User(db.Model):
    __tablename__ = 'users'  # 可写可不写，但推荐
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)#字符串64位，唯一，不能为空
    email = db.Column(db.String(120), unique=True, nullable=False)

    books = db.relationship('Book', back_populates='author')#一对多关系，books是反向加载的属性

    def __repr__(self):
        return f'<User {self.username}>'

#book表
class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    content = db.Column(db.Text, nullable=False)

    #添加user外键
    author_id = db.Column(db.Integer, db.ForeignKey("users.id") ,nullable=False)
    author = db.relationship('Users', back_populates='books')#反向加载
    def __repr__(self):
        return f'<Book {self.title}>'