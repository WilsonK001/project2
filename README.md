Hotel Boutique App

Overview
This full-stack application that I built using Node.js, Mongoose, Express, and EJS will display a list of hotels. The user may then choose a hotel and view its information and its rooms availability. Only a logged-in user will have the privilege to reserve a hotel and enjoy a 5% discount on hotels. The app also allows the user to sign up and log into their account. Doing so will open other transactions as adding, updating, editing, and deleting hotel information. While doing this project, I used the 7 RESTful routes and full Create Read Update Delete



 I first called express and set the GET route, this means that if a user goes to the localhost:3000, the connection will be triggered, then by convention I passed a call back function with two parameters, by convention they are req(request) and res(response). this route will display my homepage with the help of its sibling Index.EJS. For this project, I used the 7 RESTful routes, 
 -The Index Route helped me display the list of all pages ('/hotels')
 -The NEW Route helped show form me rendered the data I set up the SHOW route
 -The CREATE Route helped me adding new data, for this case I used this route to help a user creating a new hotel ('/hotels')
 -The SHOW Route helped me showing hotels to the user, the user could click on a single hotel and will get all the details through this route ('/hotels.new')
 -The EDIT route helped me creating a route to give an option to the user to edit the hotels on my page. This route will allow logged-in users to edit hotel informations ('/hotels/:index/edit')
 -The UPDATE Route helped me setting up a route that will update any information the user does and redirect them to the main page ('/hotels/:index')
 -The DELETE Route helped me setting up a route that gives a user the possibility to delete a hotel and redirect them 
 ('/hotels/:index')

After setting up these routes, I used a CONTROLLER for readability

This hotel's boutique application only has 15 hotels around the world that will give the user the option to make a reservation depending on its availability. Only those who signed up for an account and are logged in will have the choice to make a reservation, users without an account will have the chance to browse through the website, but won't be able to book a reservation unless they sign up and log in.

The approach that I took: 
- I first went through google to see some hotels I like and copied and pasted them in my seed_hotel.
- I set up my 7 Restful routes
- I set up my controllers and moved my route in the controllers. I had had a major bug while doing this because I added an "S" on my dependencies, it took me hours to figure it out
- I also struggle with establishing the password, i kept getting a bug, which had something to doo with me not setting module.exports to users
- I used bootstrap on my homepage and it fit my hotels nicely
- I also struggled with CSS and I tried to change the color of my discount and original price, they kept going to the next line since I was using the <p> tag, it took me a lot of time figuring it out. That is why in my code I have some CSS in <style> tags and some in the HTML. But I was successful at the end of this process
- Another big issue came on my show page, it looks like my head.ejs and bootstrap weren't cooperating on my show page, my carousel wasn't displaying it, it took me hours, I even tried to google and I couldn't find the answers, it was one or the other, not both, so I choose to drop the bootstrap on the show page and stick with materialize on the carousel.
