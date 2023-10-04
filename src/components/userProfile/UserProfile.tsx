import { Layout } from "../../core/hoc/layout";
import { Map } from "pigeon-maps";
import "./UserProfile.scss";

export default function UserProfile() {
  return (
    <>
      <Layout>
        <section className={"c-user-profile"}>
          <p>
            <b>Name:</b> Admin Admin
          </p>
          <p>
            <b>Username:</b> admin
          </p>
          <a href={"mailto:admin@postinjho.com?subject=Question&body=Hi"}>
            <b>Email:</b> admin@postinjho.com
          </a>
          <p>
            <b>Website:</b> postinjho.com
          </p>
          <a href={"tel:+385996252112"}>
            <b>Phone:</b> +385996252112
          </a>
          <p>
            <b>City:</b> Zagreb, Croatia
          </p>
          <a href={"https://q.agency"}>
            <b>Company:</b> Q Agency
          </a>
          <p>
            <b>Role:</b> Admin
          </p>
          <Map
            height={500}
            defaultCenter={[45.81, 15.98]}
            defaultZoom={7}
          ></Map>
        </section>
      </Layout>
    </>
  );
}
