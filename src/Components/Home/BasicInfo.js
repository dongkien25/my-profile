import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  TwitterOutlined,
  FacebookFilled,
  GithubOutlined,
  SkypeFilled,
} from "@ant-design/icons";
import { Tag } from "antd";
import Avatar from "assets/images/origami.jpg";

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
        <div className="social-group w-3/4 justify-between">
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
        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-group"></div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
