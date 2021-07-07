import React, { useState } from "react";
import DateFormatter from "../../Services/DateFormatter";
import ShowMore from "../ShowMore/component";
import {
  PostInfo,
  PostListContainer,
  Thumb,
  Post,
  PostsList,
  InpuContainer,
} from "./style";

const List = ({ trending, setLimit, limit, topic }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <PostsList>
        <PostListContainer
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <InpuContainer>
            <div>
              <input
                type="text"
                placeholder={`Pesquisar em: /${topic}`}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          </InpuContainer>
          {trending
            ?.slice(0, limit)
            .filter((post) => {
              if (searchTerm === "") {
                return post;
              }
              if (
                post.data.title
                  .toLowerCase()
                  .includes(searchTerm?.toLowerCase())
              ) {
                return post;
              }
            })
            .map((posts) => (
              <div key={posts.data.id}>
                <Post
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                >
                  <Thumb>
                    <img src={posts.data.thumbnail} alt="Thumbnail" />
                  </Thumb>

                  <PostInfo>
                    <h4>{posts.data.title}</h4>
                    <h5>
                      <span>Enviado {DateFormatter(posts.data.created)}</span>
                      <> por </>
                      <span>{posts.data.author}</span>
                    </h5>
                    <p>{posts.data.main}</p>
                    <div>
                      <a href={posts.data.url}>
                        <h1>Acessar Post</h1>
                      </a>
                    </div>
                  </PostInfo>
                </Post>
              </div>
            ))}
        </PostListContainer>

        {limit < trending.length && !searchTerm ? (
          <ShowMore setLimit={setLimit} limit={limit} />
        ) : null}
      </PostsList>
    </>
  );
};
export default List;
