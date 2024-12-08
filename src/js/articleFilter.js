window.onload = function () {
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document
    .querySelector(".strategies__tags")
    .addEventListener("click", (el) => {
      if (el.target.classList.contains("tag")) {
        let clickedTag = el.target;
        removeSelectedTags();
        selectClickedTag(clickedTag);
        if (clickedTag.innerText === "All") {
          showAllStrategies();
        } else {
          filterStrategyBySelectedTag(clickedTag.innerText);
        }
      }
    });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll(".strategies__tags> .tag");
  tags.forEach((tag) => {
    tag.classList.remove("tag__selected");
    tag.classList.add("tag__bordered");
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add("tag__selected");
  clickedTag.classList.remove("tag__bordered");
};

const showAllStrategies = () => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.remove("strategy_hidden");
  });
};

const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.add("strategy_hidden");
    strategy.querySelectorAll(".tag").forEach((tag) => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove("strategy_hidden");
      }
    });
  });
};
