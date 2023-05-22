import {Link} from 'react-router-dom';
import FilmType from '../../types/film-type';
import {useEffect, useState} from 'react';
import { Player } from '../player/player';

type FilmCardProps = {
    film: FilmType;
    setActiveFilmCard: (id: number) => void;
    isActive: boolean;
}

export const FilmCard = (props: FilmCardProps): JSX.Element => {
  const [isPlaying, setIsPlaying]= useState(false);
  useEffect (() => {
    if (props.isActive) {
      const timer = setTimeout(() => setIsPlaying(true), 1000);
      return () => {
        clearTimeout(timer);
        setIsPlaying(false);
      };
    }
  }, [props.isActive]);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => props.setActiveFilmCard(props.film.id)}
      onMouseLeave={() => props.setActiveFilmCard(NaN)}
    >
      <div className="small-film-card__image">
        {isPlaying
          ? <Player videoSrc={props.film.previewVideolink} posterImageSrc={props.film.posterImage} muted/>
          : <img src={props.film.posterImage} alt={props.film.name} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link to = {`/film/${props.film.id}`} className="small-film-card__link">{props.film.name}</Link>
      </h3>
    </article>
  );
};
