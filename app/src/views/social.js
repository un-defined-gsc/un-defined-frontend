import PostCard from "@/components/cards/PostCard";

const Social = () => {
  const settings = {
    showComments: true,
    showLikes: true,
    showReactions: true,
  };
  const data = {
    image: "https://via.placeholder.com/800x300",
    categories: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ],
    title: "Title",
    description: "Description",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
  };

  return (
    <>
      <PostCard settings={settings} data={data} />
    </>
  );
};
export default Social;
