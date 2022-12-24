import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleMostPopulerItem,
    MostPopulerContent,
    Author,
    Title,
    PostMeta,
    PostDate,
    PostReadTime,
} from "./style";
const MostPopulerItem = ({
    title,
    thume_image,
    dateSlug,
    authorId,
    date,
    slug,
}) => {
    const images = getImage(thume_image);
    return (
        <SingleMostPopulerItem>
            <Link to={`/${slug}`}>
                <GatsbyImage image={images} alt={title} />
            </Link>
            <MostPopulerContent>
                <Author>
                    By <Link to={`/profile/${authorId}`}>{authorId}</Link>
                </Author>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <PostMeta>
                    <PostDate>
                        <Link to={`/date/${dateSlug}`}>{date}</Link>
                    </PostDate>
                    <PostReadTime>10 min read</PostReadTime>
                </PostMeta>
            </MostPopulerContent>
        </SingleMostPopulerItem>
    );
};
MostPopulerItem.propTypes = {
    title: PropTypes.string,
    thume_image: PropTypes.object,
    date: PropTypes.string,
    slug: PropTypes.string,
    dateSlug: PropTypes.string,
    authorId: PropTypes.string,
};
export default MostPopulerItem;
