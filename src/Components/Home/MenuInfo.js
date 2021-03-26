import React from "react";
import { Button } from "antd";
import { ReactComponent as GithubIcon } from "assets/images/github.svg";
import { ReactComponent as ArticleIcon } from "assets/images/article.svg";
import { ReactComponent as ContactIcon } from "assets/images/contact.svg";
import { RightOutlined } from "@ant-design/icons";
function MenuInfo() {
  return (
    <div className="menu-group-btn mt-16">
      <Button size="large" className="btn-menu">
        <GithubIcon className="btn-menu-icon" /> Github
        <RightOutlined className="arrow-left-icon" />
      </Button>
      <Button size="large" className="btn-menu">
        <ArticleIcon className="btn-menu-icon" /> Articles
        <RightOutlined className="arrow-left-icon" />
      </Button>
      <Button size="large" className="btn-menu">
        <ContactIcon className="btn-menu-icon" />
        Contact
        <RightOutlined className="arrow-left-icon" />
      </Button>
    </div>
  );
}

export default MenuInfo;
