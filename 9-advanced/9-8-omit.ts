{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 기존의 선언된 타입중에서 특정 부분을 제외하여 새로운 타입을 만든다.
  type VideoMetadata = Omit<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data...",  
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
