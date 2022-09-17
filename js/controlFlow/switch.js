let role = "admin";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator");
    break;

  case "admin":
    console.log("It's Admin");
    break;

  default:
    console.log("Unknown User");
}

if (role === "guest") console.log("GUEST");
else if (role === "moderator") console.log("MODERATOR");
else if (role === 'admin') console.log('ADMINISTRATOR')
else console.log("UNAUTHORIZED USER");
