import RoadmapPageView from "@/views/roadmap";

const RoadmapPage = () => <RoadmapPageView />;

RoadmapPage.acl = {
  action: "read",
  subject: "timeline",
};

export default RoadmapPage;
