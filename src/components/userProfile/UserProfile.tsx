import { Layout } from "../../core/hoc/layout";
import { Map } from "pigeon-maps";
import "./UserProfile.scss";
import { useTranslation } from "react-i18next";

export default function UserProfile() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <section className={"c-user-profile"}>
          <p>
            <b>{t("PROFILE.NAME")}:</b> Admin Admin
          </p>
          <p>
            <b>{t("PROFILE.USERNAME")}:</b> admin
          </p>
          <a href={"mailto:admin@postinjho.com?subject=Question&body=Hi"}>
            <b>{t("PROFILE.EMAIL")}:</b> admin@postinjho.com
          </a>
          <p>
            <b>{t("PROFILE.WEBSITE")}:</b> postinjho.com
          </p>
          <a href={"tel:+385996252112"}>
            <b>{t("PROFILE.PHONE_NUMBER")}:</b> +385996252112
          </a>
          <p>
            <b>{t("PROFILE.CITY")}:</b> Zagreb, Croatia
          </p>
          <a href={"https://q.agency"}>
            <b>{t("PROFILE.COMPANY")}:</b> Q Agency
          </a>
          <p>
            <b>{t("PROFILE.ROLE")}:</b> Admin
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
