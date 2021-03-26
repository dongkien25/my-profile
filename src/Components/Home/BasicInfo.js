import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  TwitterOutlined,
  FacebookFilled,
  GithubOutlined,
  SkypeFilled,
} from "@ant-design/icons";
import ReactIcon from "assets/images/React.svg";
import VueIcon from "assets/images/Vue.svg";
import JavaScriptIcon from "assets/images/JavaScript.svg";
import SassIcon from "assets/images/SASS.svg";
import { Tag, Typography } from "antd";
import Avatar from "assets/images/origami.jpg";
const { Title } = Typography;

function BasicInfo() {
  return (
    <div className="basic-info text-center">
      <div className="avatar object-cover w-40 h-40 m-auto">
        <img
          className="rounded-full w-full h-full object-cover border-solid border-4 border-gray-500"
          alt="avatar"
          src={Avatar}
        />
      </div>
      <div className="contact">
        <h3 className="name my-3">Dong Kien</h3>
        <div className="phone contact-detail mb-3">
          <PhoneOutlined className="mr-1" /> 0358142584
        </div>
        <div className="address contact-detail mb-8">
          <EnvironmentOutlined className="mr-1" /> Hà Nội, Việt Nam
        </div>
        <div className="description mb-8">
          <p>
            <i className="text-red-500">Sau này liệu chúng ta</i> Gặp nhau vẫn
            sẽ mỉm cười Hay cũng chỉ lướt qua.{" "}
            <i className="text-red-500">Sau này liệu chúng ta</i> Có thể sẽ có
            được tất cả nhưng lại chẳng có nhau? Ta có vui, hay quên mau.
          </p>
        </div>
        <div className="social flex w-full">
          <div className="social-group flex w-2/3 justify-between m-auto">
            <a href="https://twitter.com/">
              <Tag
                icon={<TwitterOutlined />}
                color="#55acee"
                className="social-icon"
              ></Tag>
            </a>
            <a href="https://twitter.com/">
              <Tag
                icon={<GithubOutlined />}
                color="#e94e31"
                className="social-icon"
              ></Tag>
            </a>
            <a href="https://twitter.com/">
              <Tag
                icon={<FacebookFilled />}
                color="#3b5999"
                className="social-icon"
              ></Tag>
            </a>

            <a href="https://twitter.com/">
              <Tag
                icon={<SkypeFilled />}
                color="#29aef5"
                className="social-icon"
              ></Tag>
            </a>
          </div>
        </div>

        <div className="skills w-full mt-7">
          <Title level={4} code className="text-left skill-title">
            Skills
          </Title>
          <div className="skill-group flex w-full justify-between mt-5">
            <Tag color="cyan" className="skill-icon">
              <img src={ReactIcon} alt="" /> ReactJS
            </Tag>
            <Tag color="green" className="skill-icon">
              <img src={VueIcon} alt="" /> VueJS
            </Tag>
            <Tag color="gold" className="skill-icon">
              <img src={JavaScriptIcon} alt="" /> JavaScript
            </Tag>
            <Tag color="magenta" className="skill-icon">
              <img src={SassIcon} alt="" /> SCSS
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
