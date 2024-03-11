import React from "react";
import "../../styles/favoritespage.scss";
import { Arrow } from "../../components/ui/svg/Arrow";
import { Share } from "../../components/ui/svg/Share";
import { MeatballsMenu } from "../../components/ui/svg/MeatballsMenu";
import { Chevron } from "../../components/ui/svg/Chevron";
import { Delete } from "../../components/ui/svg/Delete";

type data = {
  link: string;
  favTags: string;
  tag: string;
  tagTitle: string;
};

const favoritesinfo = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/83f7/d5c7/4ca0b926b9572afc15a12eed7ab813a4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gNv1JRpsvDDUpNRFNnOJfx4j6e6hvBawKPT00TjnQNKfh7Ar~0dYUhTXszm0E5sZGaZT2gxK10Gj6-pMi5lIImrXhaMKZlr~ExzUuhvedHBzlmaSGFg08CRWCzdfLHR9KdlHZX8guVH9nGIIuwLLqaXlj~6VOdIyEMisJailrMw~gEEgmr0zx-Dbt8iHRXh6pJ2HjNl5FingExnIua0Gi9zO5PEgbeZu-r~Qc1ZTgRA5kURyY8ky0VYvJIo8J8CWhT6fzzr8l4dAzS-M3Zyf2FozzEhmqbYhKECsuX8C3i3YHTk~SkjSRh-7GGDpH03mn58uKEsAcEsxZm~GVczzag__",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/83f7/d5c7/4ca0b926b9572afc15a12eed7ab813a4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gNv1JRpsvDDUpNRFNnOJfx4j6e6hvBawKPT00TjnQNKfh7Ar~0dYUhTXszm0E5sZGaZT2gxK10Gj6-pMi5lIImrXhaMKZlr~ExzUuhvedHBzlmaSGFg08CRWCzdfLHR9KdlHZX8guVH9nGIIuwLLqaXlj~6VOdIyEMisJailrMw~gEEgmr0zx-Dbt8iHRXh6pJ2HjNl5FingExnIua0Gi9zO5PEgbeZu-r~Qc1ZTgRA5kURyY8ky0VYvJIo8J8CWhT6fzzr8l4dAzS-M3Zyf2FozzEhmqbYhKECsuX8C3i3YHTk~SkjSRh-7GGDpH03mn58uKEsAcEsxZm~GVczzag__",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/summervacation2026.jpg",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/summervacation2026.jpg",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/christmasvacation.jpg",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/christmasvacation.jpg",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
];

const Favorites = () => {
  return (
    <>
      <div className="fav-page">
        <div className="d-flex align-items-center justify-content-between title">
          <div className="d-flex align-items-center gap-3">
            <Arrow _color="#000" _width={24} _height={24} />
            <h3>Christmas vacation 2023</h3>
          </div>
          <div className="d-flex gap-3 buttons">
            <Share _color="#000" _width={24} _height={24} />
            <MeatballsMenu _color="#000" _width={24} _height={24} />
          </div>
        </div>
        <div className="mt-4 mb-4 header d-flex justify-content-between">
          <div>
            <p>6 Saved Properties</p>
          </div>
          <div className="d-flex gap-2">
            <div>Sort by:</div>
            <div>Availability</div>
            <div>
              <Chevron _color="#000" _width={16} _height={16} />
            </div>
          </div>
        </div>
        <div className="favorites-infocard-container">
          {favoritesinfo.map((data, i) => (
            <div className="favorites-infocard" key={i}>
              <div className="infocard-img">
                <img src={data.image} alt="" />
              </div>
              <div className="infocard-text d-flex flex-column gap-1">
                <button className="btn m-0 p-0 d-flex flex-row-reverse">
                  <Delete _color="#ADADAD" _width={15} _height={16.67} />
                </button>
                <div>
                  <p className="title">{data.title}</p>
                  <div className="d-flex gap-3">
                    <p className="text">
                      {data.nights} nights • Saved for {data.month}{" "}
                      {data.dateFrom} - {data.dateTo}
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    <strong>PHP 15,000</strong> per night •{" "}
                    <span className="text-secondary text-decoration-underline">
                      PHP 30,000 total
                    </span>
                  </p>
                </div>
                <div className="d-flex gap-2 tag-div">
                  <span className="tag">Free Breakfast</span>
                  <span className="tag">Pet-Friendly</span>
                  <span className="off-tag">17% OFF</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
