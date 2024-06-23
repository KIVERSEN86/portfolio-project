import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const params = useParams();
  return <div>Individual Post ID: {params.id}</div>;
}
