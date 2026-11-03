import { useState } from "react";
import useTitle from "../../hooks/useTitle";

import { commentState, comments as initialComments } from "../../data/comments";
import { products } from "../../data/products";
import { users } from "../../data/users";
import SectionTitle from "../../components/common/SectionTitle";
import CommentsTableView from "../../features/CommentsView/CommentsTableView";

const Comments = () => {
  useTitle("ادمینوا - نظرات");

  const [allComments, setAllComments] = useState(() =>
    initialComments.map((comment) => ({
      ...comment,
    })),
  );

  const [paginatedComments, setPaginatedComments] = useState([]);

  const removeComment = (commentId) => {
    setAllComments((prev) =>
      prev.filter((comment) => comment.id !== commentId),
    );
  };

  const acceptComment = (commentId) => {
    setAllComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? { ...comment, state: commentState[1] }
          : comment,
      ),
    );
  };

  return (
    <>
      <SectionTitle title="نظرات" />

      <section className="mt-6 w-full">
        <CommentsTableView
          comments={allComments}
          paginatedComments={paginatedComments}
          setComments={setPaginatedComments}
          removeComment={removeComment}
          acceptComment={acceptComment}
          products={products}
          users={users}
        />
      </section>
    </>
  );
};

export default Comments;
