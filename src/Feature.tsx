import { useState } from "react";
import { useSharedBookmarks } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

export function Feature({ room, config }: { room: YRoom | null; config: MeshConfig }) {
  const board = useSharedBookmarks(room);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const addBookmark = () => {
    if (board.add({ id: `${room?.peerId ?? "local"}-${Date.now()}`, title, url })) {
      setTitle("");
      setUrl("");
    }
  };
  return (
    <main className="feature-placeholder">
      <p className="eyebrow">Shared links</p>
      <h1>{config.appName}</h1>
      <p>{config.description}</p>
      <div className="composer">
        <label htmlFor="bookmark-title">Link title</label>
        <input
          id="bookmark-title"
          value={title}
          maxLength={160}
          placeholder="A useful resource"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="bookmark-url">Link URL</label>
        <input
          id="bookmark-url"
          value={url}
          type="url"
          placeholder="https://example.com"
          onChange={(event) => setUrl(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") addBookmark();
          }}
        />
        <button type="button" onClick={addBookmark} disabled={!title.trim() || !url.trim()}>
          Save link
        </button>
      </div>
      <p className="feature-status" aria-live="polite">
        {board.bookmarks.length} shared {board.bookmarks.length === 1 ? "link" : "links"}
      </p>
      <ul className="shared-list" aria-label="Shared bookmarks">
        {board.bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            <a href={bookmark.url} target="_blank" rel="noreferrer">
              {bookmark.title}
            </a>
            <span>saved by {bookmark.addedBy}</span>
            {bookmark.addedBy === room?.peerId ? (
              <button type="button" onClick={() => board.remove(bookmark.id)}>
                Remove
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
