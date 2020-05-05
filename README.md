# recipe_app
> Server-side Scripting Frameworks project

The application is used for adding and reading recipes.
Users can comment, rate and bookmark the recipes.

## Backend

1. Setup mongodb database
2. Create .env file in 'backend' folder
3. Add DB_URL and SECRET_KEY variables to .env

And then run these commands:

```sh
cd backend
npm install
npm start
```

Backend will be running on localhost:3030

## Frontend

To run frontend, run these commands:

```sh
cd frontend
npm install
npm start
```

Frontend will be running on localhost:3000

## Setting up data

1. Create user

```sh
mutation{
  register(registerInput:{
    email: "e@mail.com"
    username: "MyUsename"
    password: "MyPassword"
    confirmPassword: "MyPassword"
  }){
    id
    token
  }
}
```

Rest of these will need the token, so add http header:
```sh
{
  "Authorization":"Bearer TOKEN"
}
```

2. Create new category

```sh
mutation category{
  addCategory(title:"Category title"){id,title}
}
```

3. Create new recipe

```sh
mutation createRecipe{
  createRecipe(title: "Recipe title",
    description:"description texts",
    steps:"coocking steps here",
    difficulty:"Easy",
    cookingTime:"1",
  	categoryId:"CATEGORY_ID"){
    id
    title
  }
}

```

4. Rate the recipe

```sh
mutation rate{
  rateRecipe(recipeId:"RECIPE_ID", rate: 2)
  {
    id
    rates{id, username, rate}
  }
}
```

5. Create comment

```sh
mutation createComment{
  createComment(recipeId:"RECIPE_ID",
    body:"comment text")
  {id, comments{id,username,body}}
}
```