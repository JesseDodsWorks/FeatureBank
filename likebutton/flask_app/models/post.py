from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

class Post:
    def __init__(self, data):
        self.id = data['id']
        self.description = data['description']
        self.image_path = data['image_path']
        self.likes = data["likes"]
        self.created_at = data['created_at']
        self.updated_at = data['updated_at'] 

    @classmethod
    def get_by_id(cls, id):
        query = f"""
            SELECT *
            FROM posts
            WHERE posts.id=%(id)s;
        """
        data = { "id": id }
        results = cls.run_query(query, data)
        print(results)

        Posts = []
        for post in results:
            Posts.append( cls(post) )
        return Posts

    @classmethod
    def get_all(cls):
        query = f"""
            SELECT *
            FROM posts
        """
        results = cls.run_query(query)

        # if not len(results) > 0:
        #     return False

        Posts = []
        for post in results:
            Posts.append( cls(post) )
            
        return Posts          

    @classmethod
    def save(cls, data ):
        query = f"""
            INSERT INTO posts ( description, image_path, created_at, updated_at) 
            VALUES ( %(description)s, %(image_path)s, %(likes)s, NOW(), NOW() );
        """
        return cls.run_query(query, data)

    @classmethod
    def update(cls, data ):
        query = f"""
            UPDATE posts 
            SET description=%(description)s, 
            image_path=%(image_path)s,
            likes=%(likes)s, 
            updated_at=NOW() 
            WHERE id=%(id)s;
        """
        return cls.run_query(query, data)

    @classmethod
    def delete(cls, data ):
        query = "DELETE FROM posts WHERE id=%(id)s;"
        return cls.run_query( query, data )  

    @classmethod
    def run_query(cls, query, data=None):
        return connectToMySQL('likebutton').query_db( query, data )