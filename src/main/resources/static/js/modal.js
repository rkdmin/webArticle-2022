// modal event 처리
const commentEditModal = document.querySelector("#comment-edit-modal");

const editCommentId = document.querySelector("#edit-comment-id");
const editCommentArticleId = document.querySelector("#edit-comment-article-id");
const editCommentNickname = document.querySelector("#edit-comment-nickname");
const editCommentBody = document.querySelector("#edit-comment-body");

function shownModal(event){
    // 트리거 버튼 선택 (보여진 modal의 버튼)
    const triggerBtn = document.querySelector(event.relatedTarget);

    // 데이터 가져오기
    const id = triggerBtn.getAttribute("data-bs-id");
    const nickname = triggerBtn.getAttribute("data-bs-nickname");
    const body = triggerBtn.getAttribute("data-bs-body");
    const articleId = triggerBtn.getAttribute("data-bs-articleId");

    // 데이터 반영
    editCommentId.value = id;
    editCommentArticleId = articleId;
    editCommentNickname = nickname;
    editCommentBody = body;
}

// modal이 열렸을 때 함수 실행 
commentEditModal.addEventListener("show.bs.modal", shownModal);

