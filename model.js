const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'test.db',
    define:{freezeTableName:true}
})

commonAttr ={
        type:DataTypes.STRING,
        allowNull:false,
    }
commonAttr2 = {
    type:DataTypes.INTEGER,
    allowNull:false
}

const User = sequelize.define('user',{
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    username:commonAttr,
    password:commonAttr,
    profilePicture:commonAttr
})

const Post = sequelize.define('post',{
    postId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    displayImageLink:commonAttr,
    originalImageLink:commonAttr,
    numFavourites:commonAttr2,
    numViews:commonAttr2,
    numComments:commonAttr2,
    postedBy:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:'userId'
        }
    }
})


sequelize.sync()




try{
    sequelize.authenticate()
    console.log('connection sucessful')
}
catch(err){
    console.error('unable to connect to database')
}



