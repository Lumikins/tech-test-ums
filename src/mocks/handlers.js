import { http, HttpResponse } from "msw";

export const handlers = [
  // get all users
  http.get("/api/users", (resolver) => {
    return HttpResponse.json([
      {
        id: 1,
        img: "https://xsgames.co/randomusers/assets/avatars/male/36.jpg",
        lastName: "Marquis",
        firstName: "Patocka",
        email: "mar.pat@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: true,
      },
      {
        id: 2,
        img: "https://xsgames.co/randomusers/assets/avatars/female/64.jpg",
        lastName: "Yahaira",
        firstName: "Chaj",
        email: "yah.cha@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 3,
        img: "https://xsgames.co/randomusers/assets/avatars/female/31.jpg",
        lastName: "Dapuzzo",
        firstName: "Irene",
        email: "dap.ire@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: true,
      },
      {
        id: 4,
        img: "https://xsgames.co/randomusers/assets/avatars/male/41.jpg",
        lastName: "Macintosh",
        firstName: "Lorenzo",
        email: "mac_lor@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 5,
        img: "https://xsgames.co/randomusers/assets/avatars/male/76.jpg",
        lastName: "Tastad",
        firstName: "Lorenzo",
        email: "tas_lor@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 6,
        img: "https://xsgames.co/randomusers/assets/avatars/male/11.jpg",
        lastName: "Bazzle",
        firstName: "Efrain",
        email: "baz.efr@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: true,
      },
      {
        id: 7,
        img: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
        lastName: "Cortinez",
        firstName: "Alan",
        email: "cor.ala@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: true,
      },
      {
        id: 8,
        // img: "https://xsgames.co/randomusers/assets/avatars/female/38.jpg",
        lastName: "Angstman",
        firstName: "Camille",
        email: "ang_cam@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: true,
      },
      {
        id: 9,
        img: "https://xsgames.co/randomusers/assets/avatars/female/20.jpg",
        lastName: "Orpurt",
        firstName: "Valencia",
        email: "orp_val@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 10,
        img: "https://xsgames.co/randomusers/assets/avatars/female/50.jpg",
        lastName: "Guiton",
        firstName: "Vernetta",
        email: "gui_ver@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 11,
        img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Dunn",
        firstName: "Gertrude",
        email: "gibo@gmail.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 12,
        img: "https://xsgames.co/randomusers/assets/avatars/female/60.jpg",
        lastName: "Williams",
        firstName: "Mara",
        email: "wil.mar@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 13,
        img: "https://xsgames.co/randomusers/assets/avatars/female/55.jpg",
        lastName: "Lubinsky",
        firstName: "Elda",
        email: "lub_eld@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 14,
        img: "https://xsgames.co/randomusers/assets/avatars/female/19.jpg",
        lastName: "Wilferth",
        firstName: "Clarice",
        email: "wil_cla@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
      {
        id: 15,
        img: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
        lastName: "Mackins",
        firstName: "Jeremiah",
        email: "mac_jer@example.com",
        phone: "+33612345678",
        createdAt: "01.02.2023",
        admin: false,
      },
    ]);
  }),
  // create new user
  http.post("/api/users", async ({ request }) => {
    // if user not authenticated, block post request
    const authToken = request.headers.get("Authorization");
    if (!authToken) return HttpResponse.json("Unathorized", { status: 401 });
    const requestBody = await request.json();
    return HttpResponse.json(
      {
        content: requestBody.content,
        createdAt: new Date().toLocaleString(),
      },
      { status: 201 }
    );
  }),
  // update selected user
  http.patch("/api/users/:id", async ({ request }) => {
    const requestBody = await request.json();
    return HttpResponse.json(
      {
        content: requestBody.content,
      },
      { status: 200 }
    );
  }),
  // delete selected user
  http.delete("/api/users/:id", ({ params }) => {
    console.log();
    return HttpResponse.json(
      {
        message: `User ${params.id} has been successfully deleted from the database`,
      },
      { status: 200 }
    );
  }),
];
