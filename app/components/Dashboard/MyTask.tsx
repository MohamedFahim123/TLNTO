import Image from "next/image";
import { TASK } from "./task";

export default function MyTask({ task }: { task: TASK }) {
  return (
    <>
      <div className="card-style-2 hover-up my-4 p-3 border border-1 rounded-3 ">
        <div className="card-head w-100 d-flex justify-content-between mb-4">
          <div className="card-image w-25">
            <Image
              width={50}
              height={50}
              src={`/assets/imgs/page/dashboard/${task.img}`}
              alt="jobBox"
            />
          </div>
          <div className="card-title w-75">
            <h6>{task.title}</h6>
            <span className="text-muted">Start: </span>
            <span>{task.date} days ago</span>
          </div>
        </div>
        <div className="mr-15">
          {task.tag.map((item, i) => (
            <span key={i}>
              {item === "High" && <a className="btn btn-tag high">{item}</a>}
              {item === "Planing" && (
                <a className="btn btn-tag planing">{item}</a>
              )}
              {item === "In Progress" && (
                <a className="btn btn-tag in-progress">{item}</a>
              )}
              {item === "Low" && <a className="btn btn-tag low">{item}</a>}
              {item === "Completed" && (
                <a className="btn btn-tag complete">{item}</a>
              )}
            </span>
          ))}
        </div>
        <div className="card-progress">
          <span>Complete:</span>
          <strong>{task.progress}</strong>
          <span className="hour"> %</span>
        </div>
      </div>
    </>
  );
}
