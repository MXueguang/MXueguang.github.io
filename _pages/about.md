---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
author: Xueguang Ma
---

Hi! I'm Xueguang Ma (马雪光).
I am a fourth-year PhD student in the David R. Cheriton School of Computer Science at the University of Waterloo, Canada.
I am advised by Prof. Jimmy Lin.
My research interests include Information Retrieval (IR) and Natural Language Processing (NLP).

I received my Bachelor of Mathematics from the University of Waterloo in 2021.

I like snowboarding and badminton.

<!-- > I am currectly looking for internship opportunities for Spring/Summer 2024. -->

## Research Interests

My overarching research goal is to make it easy for people and intelligent systems to access, understand, and interact with world information.

To support this vision, my research explores:

- **Neural Retrieval and LLM Retrieval:** Developing precise and generalizable retrieval systems. [UniCOIL](https://arxiv.org/abs/2103.00353), [RankLlama](https://dl.acm.org/doi/10.1145/3626772.3657951),  [HyDE](https://aclanthology.org/2023.acl-long.99/), [LRL](https://arxiv.org/abs/2305.02156), [PromptReps](https://aclanthology.org/2024.emnlp-main.250/), [Drama](https://arxiv.org/abs/2502.18460), [Rank-R1](https://arxiv.org/abs/2503.06034)
- **Multimodal Retrieval Augmented Generation:** Bridging text and visual modalities to access information beyond text. [DSE](https://aclanthology.org/2024.emnlp-main.373/), [VISA](https://arxiv.org/abs/2412.14457), [OmniEmbed](https://huggingface.co/Tevatron/OmniEmbed-v0.1)
- **LLM Reasoning:** Assessing and optimizing reasoning capabilities of large language models across domains and tasks. [MMLU-Pro](https://huggingface.co/spaces/TIGER-Lab/MMLU-Pro), [General-Reasoner](https://arxiv.org/abs/2505.14652)
- **Open-source Toolkits:** Building open-source toolkits for research on information retrieval. [Tevatron](https://github.com/texttron/tevatron/), [Pyserini](https://github.com/castorini/pyserini), [Anserini](https://github.com/castorini/anserini)


## Publications

<!-- Filter Bar: Tag Links -->
<div id="pub-filter-bar" style="margin-bottom: 0.5em; display: flex; flex-wrap: wrap; gap: 0.7em; align-items: center;">
  <span style="font-weight: bold; margin-right: 0.5em;">Topics:</span>
  <span class="tag-link tag-all active" data-tag="all" onclick="filterByTag('all', this)">All</span>
  <span class="tag-link tag-retrieval" data-tag="retrieval" onclick="filterByTag('retrieval', this)">Retrieval</span>
  <span class="tag-link tag-large-language-model" data-tag="large-language-model" onclick="filterByTag('large-language-model', this)">Large Language Model</span>
  <span class="tag-link tag-retrieval-augmented-generation" data-tag="retrieval-augmented-generation" onclick="filterByTag('retrieval-augmented-generation', this)">Retrieval Augmented Generation</span>
  <span class="tag-link tag-reasoning" data-tag="reasoning" onclick="filterByTag('reasoning', this)">Reasoning</span>
  <span class="tag-link tag-multilingual" data-tag="multilingual" onclick="filterByTag('multilingual', this)">Multilingual</span>
  <span class="tag-link tag-multimodal" data-tag="multimodal" onclick="filterByTag('multimodal', this)">Multimodal</span>
  <span class="tag-link tag-benchmark" data-tag="benchmark" onclick="filterByTag('benchmark', this)">Benchmark</span>
</div>
<!-- Year Bar: Year Links on a new line -->
<div id="pub-year-bar" style="margin-bottom: 0.5em; display: flex; flex-wrap: wrap; gap: 0.7em; align-items: center;">
  <span style="font-weight: bold; margin-right: 0.5em;">Year:</span>
  <span class="year-link year-all active" data-year="all" onclick="filterByYear('all', this)">All</span>
  <span class="year-link year-2024" data-year="2024" onclick="filterByYear('2024', this)">2024</span>
  <span class="year-link year-2023" data-year="2023" onclick="filterByYear('2023', this)">2023</span>
  <span class="year-link year-2022" data-year="2022" onclick="filterByYear('2022', this)">2022</span>
  <span class="year-link year-2021" data-year="2021" onclick="filterByYear('2021', this)">2021</span>
</div>
<!-- Authorship Bar: Authorship Links on a new line -->
<div id="pub-authorship-bar" style="margin-bottom: 0.5em; display: flex; flex-wrap: wrap; gap: 0.7em; align-items: center;">
  <span style="font-weight: bold; margin-right: 0.5em;">Authorship:</span>
  <span class="first-link first-all active" data-first="all" onclick="filterByFirst('all', this)">All</span>
  <span class="first-link first-author" data-first="first-author" onclick="filterByFirst('first-author', this)">(Co-)First Author</span>
</div>
<!-- Venue Bar: Venue Links on a new line -->
<div id="pub-venue-bar" style="margin-bottom: 1.5em; display: flex; flex-wrap: wrap; gap: 0.7em; align-items: center;">
  <span style="font-weight: bold; margin-right: 0.5em;">Venue:</span>
  <span class="venue-link venue-all active" data-venue="all" onclick="filterByVenue('all', this)">All</span>
  <span class="venue-link venue-acl" data-venue="acl" onclick="filterByVenue('acl', this)">ACL</span>
  <span class="venue-link venue-naacl" data-venue="naacl" onclick="filterByVenue('naacl', this)">NAACL</span>
  <span class="venue-link venue-emnlp" data-venue="emnlp" onclick="filterByVenue('emnlp', this)">EMNLP</span>
  <span class="venue-link venue-sigir" data-venue="sigir" onclick="filterByVenue('sigir', this)">SIGIR</span>
  <span class="venue-link venue-cikm" data-venue="cikm" onclick="filterByVenue('cikm', this)">CIKM</span>
  <span class="venue-link venue-neurips" data-venue="neurips" onclick="filterByVenue('neurips', this)">NeurIPS</span>
  <span class="venue-link venue-journal" data-venue="journal" onclick="filterByVenue('journal', this)">Journal</span>
  <span class="venue-link venue-arxiv" data-venue="arxiv" onclick="filterByVenue('arxiv', this)">Preprint</span>
  <span class="venue-link venue-others" data-venue="others" onclick="filterByVenue('others', this)">Others</span>
</div>

<!-- Publications List (One line each) -->
<p style="font-size:0.97em; color:#888; margin-bottom:0.5em;">* indicate equal contribution.</p>
<ul id="selected-publications-list" class="pub-oneline-list" style="border:1px solid #eee; border-radius:8px; padding:1em; background:#fafbfc;">

  <!-- 2025 -->
  <li class="pub-oneline" data-tags="reasoning,large-language-model,arxiv,2025,first-author">
    <div class="pub-title-row"><strong class="pub-title">General-Reasoner: Advancing LLM Reasoning Across All Domains</strong></div>
    <div class="pub-authors">Xueguang Ma*, Qian Liu*, Dongfu Jiang, Ge Zhang, Zejun Ma, Wenhu Chen.</div>
    <div class="pub-venue"><em>ArXiv 2025.</em> <a href="https://arxiv.org/abs/2505.14652">Paper</a> | <a href="https://github.com/TIGER-AI-Lab/General-Reasoner">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,retrieval-augmented-generation,large-language-model,multimodal,acl,2025,first-author">
    <div class="pub-title-row"><strong class="pub-title">VISA: Retrieval Augmented Generation with Visual Source Attribution</strong></div>
    <div class="pub-authors">Xueguang Ma*, Shengyao Zhuang*, Bevan Koopman, Guido Zuccon, Wenhu Chen, Jimmy Lin.</div>
    <div class="pub-venue"><em>ACL 2025.</em> <a href="https://arxiv.org/abs/2412.14457">Paper</a> | <a href="https://github.com/castorini/visa">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,large-language-model,acl,2025,first-author">
    <div class="pub-title-row"><strong class="pub-title">DRAMA: Diverse Augmentation from Large Language Models to Smaller Dense Retrievers</strong></div>
    <div class="pub-authors">Xueguang Ma*, Xi Victoria Lin, Barlas Oguz, Jimmy Lin, Wen-tau Yih, Xilun Chen*.</div>
    <div class="pub-venue"><em>ACL 2025.</em> <a href="https://arxiv.org/abs/2502.18460">Paper</a> | <a href="https://github.com/facebookresearch/dpr-scale/tree/main/drama">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,multimodal,large-language-model,sigir,2025">
    <div class="pub-title-row"><strong class="pub-title">Document Screenshot Retrievers are Vulnerable to Pixel Poisoning Attacks</strong></div>
    <div class="pub-authors">Shengyao Zhuang, Ekaterina Khramtsova, Xueguang Ma, Bevan Koopman, Jimmy Lin, Guido Zuccon.</div>
    <div class="pub-venue"><em>SIGIR 2025.</em> <a href="https://arxiv.org/abs/2501.16902">Paper</a> | <a href="https://github.com/ielab/dsr-poisoning">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,multilingual,large-language-model,multimodal,sigir,2025,first-author">
    <div class="pub-title-row"><strong class="pub-title">Tevatron 2.0: Unified Document Retrieval Toolkit across Scale, Language, and Modality</strong></div>
    <div class="pub-authors">Xueguang Ma*, Luyu Gao*, Shengyao Zhuang*, Jiaqi Samantha Zhan, Jamie Callan, Jimmy Lin.</div>
    <div class="pub-venue"><em>SIGIR 2025.</em> <a href="https://arxiv.org/abs/2505.02466">Paper</a> | <a href="https://github.com/texttron/tevatron">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="multimodal,large-language-model,arxiv,2025">
    <div class="pub-title-row"><strong class="pub-title">PixelWorld: Towards Perceiving Everything as Pixels</strong></div>
    <div class="pub-authors">Zhiheng Lyu, Xueguang Ma, Wenhu Chen.</div>
    <div class="pub-venue"><em>ArXiv 2025.</em> <a href="https://arxiv.org/abs/2501.19339">Paper</a> | <a href="https://github.com/TIGER-AI-Lab/PixelWorld">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="reasoning,retrieval,arxiv,2025,first-author">
    <div class="pub-title-row"><strong class="pub-title">Rank-R1: Enhancing Reasoning in LLM-based Document Rerankers via Reinforcement Learning</strong></div>
    <div class="pub-authors">Shengyao Zhuang*, Xueguang Ma*, Bevan Koopman, Jimmy Lin, Guido Zuccon.</div>
    <div class="pub-venue"><em>ArXiv 2025.</em> <a href="https://arxiv.org/abs/2503.06034">Paper</a> | <a href="https://github.com/ielab/llm-rankers/tree/main/Rank-R1">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,large-language-model,retrieval-augmented-generation,arxiv,2025">
    <div class="pub-title-row"><strong class="pub-title">ScholarCopilot: Training Large Language Models for Academic Writing with Accurate Citations</strong></div>
    <div class="pub-authors">Yubo Wang, Xueguang Ma, Ping Nie, Huaye Zeng, Zhiheng Lyu, Yuxuan Zhang, Benjamin Schneider, Yi Lu, Xiang Yue, Wenhu Chen.</div>
    <div class="pub-venue"><em>ArXiv 2025.</em> <a href="https://arxiv.org/pdf/2504.00824">Paper</a> | <a href="https://github.com/TIGER-AI-Lab/ScholarCopilot">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,multimodal,large-language-model,arxiv,2025,first-author">
    <div class="pub-title-row"><strong class="pub-title">MAGMaR Shared Task System Description: Video Retrieval with OmniEmbed</strong></div>
    <div class="pub-authors">Jiaqi Samantha Zhan*, Crystina Zhang*, Shengyao Zhuang*, Xueguang Ma*, Jimmy Lin.</div>
    <div class="pub-venue"><em>ArXiv 2025.</em> <a href="https://www.arxiv.org/abs/2506.09409">Paper</a> | <a href="https://github.com/texttron/tevatron/">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,large-language-model,arxiv,2025">
    <div class="pub-title-row"><strong class="pub-title">Fixing Data That Hurts Performance: Cascading LLMs to Relabel Hard Negatives for Robust Information Retrieval</strong></div>
    <div class="pub-authors">Nandan Thakur, Crystina Zhang, Xueguang Ma, Jimmy Lin.</div>
    <div class="pub-venue"><em>ArXiv 2025.</em> <a href="https://arxiv.org/abs/2505.16967">Paper</a> | <a href="https://github.com/castorini/rlhn">Code</a> </div>
  </li>

  <!-- 2024 -->
  <li class="pub-oneline" data-tags="retrieval,benchmark,sigir,2024">
    <div class="pub-title-row"><strong class="pub-title">Resources for Brewing BEIR: Reproducible Reference Models and an Official Leaderboard</strong></div>
    <div class="pub-authors">Ehsan Kamalloo, Nandan Thakur, Carlos Lassance, Xueguang Ma, Jheng-Hong Yang, Jimmy Lin.</div>
    <div class="pub-venue"><em>ArXiv 2024.</em> <a href="https://dl.acm.org/doi/10.1145/3626772.3657862">Paper</a> </div>
  </li>
  <li class="pub-oneline" data-tags="multimodal,retrieval,large-language-model,emnlp,2024,first-author">
    <div class="pub-title-row"><strong class="pub-title">Unifying Multimodal Retrieval via Document Screenshot Embedding</strong></div>
    <div class="pub-authors">Xueguang Ma, Sheng-Chieh Lin, Minghan Li, Wenhu Chen, Jimmy Lin.</div>
    <div class="pub-venue"><em>EMNLP 2024.</em> <a href="https://aclanthology.org/2024.emnlp-main.373/">Paper</a> | <a href="https://github.com/texttron/tevatron/">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="large-language-model,retrieval-augmented-generation,arxiv,2024">
    <div class="pub-title-row"><strong class="pub-title">LongRAG: Enhancing Retrieval-Augmented Generation with Long-context LLMs</strong></div>
    <div class="pub-authors">Ziyan Jiang, Xueguang Ma, Wenhu Chen.</div>
    <div class="pub-venue"><em>ArXiv 2024.</em> <a href="https://arxiv.org/abs/2406.15319">Paper</a> | <a href="https://github.com/TIGER-AI-Lab/LongRAG/">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="benchmark,large-language-model,reasoning,neurips,2024">
    <div class="pub-title-row"><strong class="pub-title">MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark</strong></div>
    <div class="pub-authors">Yubo Wang, Xueguang Ma, Ge Zhang, Yuansheng Ni, Abhranil Chandra, Shiguang Guo, Weiming Ren, Aaran Arulraj, Xuan He, Ziyan Jiang, Tianle Li, Max Ku, Kai Wang, Alex Zhuang, Rongqi Fan, Xiang Yue, Wenhu Chen.</div>
    <div class="pub-venue"><em>NeurIPS 2024.</em> <a href="https://openreview.net/forum?id=y10DM6R2r3#discussion">Paper</a> | <a href="https://github.com/TIGER-AI-Lab/MMLU-Pro">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="large-language-model,retrieval,emnlp,2024">
    <div class="pub-title-row"><strong class="pub-title">PromptReps: Prompting Large Language Models to Generate Dense and Sparse Representations for Zero-Shot Document Retrieval</strong></div>
    <div class="pub-authors">Shengyao Zhuang, Xueguang Ma, Bevan Koopman, Jimmy Lin, Guido Zuccon.</div>
    <div class="pub-venue"><em>EMNLP 2024.</em> <a href="https://aclanthology.org/2024.emnlp-main.250/">Paper</a> | <a href="https://github.com/ielab/PromptReps">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="large-language-model,retrieval,sigir,first-author">
    <div class="pub-title-row"><strong class="pub-title">Fine-Tuning LLaMA for Multi-Stage Text Retrieval</strong></div>
    <div class="pub-authors">Xueguang Ma, Liang Wang, Nan Yang, Furu Wei, Jimmy Lin.</div>
    <div class="pub-venue"><em>SIGIR 2024.</em> <a href="https://dl.acm.org/doi/10.1145/3626772.3657951">Paper</a> | <a href="https://github.com/texttron/tevatron/">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="large-language-model,retrieval,naacl,2024">
    <div class="pub-title-row"><strong class="pub-title">Found in the Middle: Permutation Self-Consistency Improves Listwise Ranking in Large Language Models</strong></div>
    <div class="pub-authors">Raphael Tang, Xinyu Zhang, Xueguang Ma, Jimmy Lin, Ferhan Ture.</div>
    <div class="pub-venue"><em>NAACL 2024.</em> <a href="https://aclanthology.org/2024.naacl-long.129/">Paper</a> | <a href="https://github.com/castorini/perm-sc">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="large-language-model,retrieval-augmented-generation,emnlp,2024">
    <div class="pub-title-row"><strong class="pub-title">Augmenting Black-box LLMs with Medical Textbooks for Clinical Question Answering</strong></div>
    <div class="pub-authors">Yubo Wang, Xueguang Ma, Wenhu Chen.</div>
    <div class="pub-venue"><em>EMNLP 2024 Findings.</em> <a href="https://aclanthology.org/2024.findings-emnlp.95/">Paper</a> | <a href="https://github.com/TIGER-AI-Lab/LLM-AMT">Code</a> </div>
  </li>

  <!-- 2023 -->
  <li class="pub-oneline" data-tags="retrieval,sigir-ap,2023,first-author">
    <div class="pub-title-row"><strong class="pub-title">Enhancing Sparse Retrieval via Unsupervised Learning</strong></div>
    <div class="pub-authors">Xueguang Ma, Hengxin Fun, Xusen Yin, Antonio Mallia, Jimmy Lin.</div>
    <div class="pub-venue"><em>SIGIR-AP 2023.</em> <a href="https://dl.acm.org/doi/10.1145/3624918.3625334">Paper</a> </div>
  </li>

  <li class="pub-oneline" data-tags="retrieval,sigir,2023">
    <div class="pub-title-row"><strong class="pub-title">SLIM: Sparsified late interaction for multi-vector retrieval with inverted indexes</strong></div>
    <div class="pub-authors">Minghan Li, Sheng-Chieh Lin, Xueguang Ma, Jimmy Lin.</div>
    <div class="pub-venue"><em>SIGIR 2023.</em> <a href="https://dl.acm.org/doi/10.1145/3539618.3591977">Paper</a> | <a href="https://github.com/castorini/pyserini/blob/master/docs/experiments-slim.md">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="benchmark,reasoning,large-language-model,emnlp,2023">
    <div class="pub-title-row"><strong class="pub-title">TheoremQA: A theorem-driven question answering dataset</strong></div>
    <div class="pub-authors">Wenhu Chen, Ming Yin, Max Ku, Pan Lu, Yixin Wan, Xueguang Ma, Jianyu Xu, Xinyi Wang, Tony Xia.</div>
    <div class="pub-venue"><em>EMNLP 2023.</em> <a href="https://aclanthology.org/2023.emnlp-main.489/">Paper</a> | <a href="https://huggingface.co/datasets/TIGER-Lab/TheoremQA">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,multilingual,tois,2023">  
    <div class="pub-title-row"><strong class="pub-title">Toward best practices for training multilingual dense retrieval models</strong></div>
    <div class="pub-authors">Xinyu Zhang, Kelechi Ogueji, Xueguang Ma, Jimmy Lin.</div>
    <div class="pub-venue"><em>TOIS 2023.</em> <a href="https://dl.acm.org/doi/10.1145/3613447">Paper</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,first-author">
    <div class="pub-title-row"><strong class="pub-title">Anserini Gets Dense Retrieval: Integration of Lucene's HNSW Indexes</strong></div>
    <div class="pub-authors">Xueguang Ma, Tommaso Teofili, Jimmy Lin.</div>
    <div class="pub-venue"><em>CIKM 2023.</em> <a href="https://dl.acm.org/doi/10.1145/3583780.3615112">Paper</a> | <a href="https://github.com/castorini/anserini">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="large-language-model,retrieval,first-author">
    <div class="pub-title-row"><strong class="pub-title">Zero-Shot Listwise Document Reranking with a Large Language Model</strong></div>
    <div class="pub-authors">Xueguang Ma, Xinyu Zhang, Ronak Pradeep, Jimmy Lin.</div>
    <div class="pub-venue"><em>ArXiv 2023.</em> <a href="https://arxiv.org/abs/2305.02156">Paper</a> </div>
  </li>
  <li class="pub-oneline" data-tags="large-language-model,retrieval-augmented-generation">
    <div class="pub-title-row"><strong class="pub-title">Few-shot In-context Learning for Knowledge Base Question Answering</strong></div>
    <div class="pub-authors">Tianle Li, Xueguang Ma, Alex Zhuang, Yu Gu, Yu Su, Wenhu Chen.</div>
    <div class="pub-venue"><em>ACL 2023.</em> <a href="https://aclanthology.org/2023.acl-long.385/">Paper</a> | <a href="https://github.com/TIGER-AI-Lab/KB-BINDER">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="large-language-model,reasoning,first-author">
    <div class="pub-title-row"><strong class="pub-title">Program of Thoughts Prompting: Disentangling Computation from Reasoning for Numerical Reasoning Tasks</strong></div>
    <div class="pub-authors">Wenhu Chen*, Xueguang Ma*, Xinyi Wang, William W. Cohen.</div>
    <div class="pub-venue"><em>TMLR 2023.</em> <a href="https://openreview.net/forum?id=YfZ4ZPt8zd">Paper</a> | <a href="https://github.com/TIGER-AI-Lab/Program-of-Thoughts">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,first-author">
    <div class="pub-title-row"><strong class="pub-title">Tevatron: An Efficient and Flexible Toolkit for Dense Retrieval</strong></div>
    <div class="pub-authors">Luyu Gao*, Xueguang Ma*, Jimmy Lin, Jamie Callan.</div>
    <div class="pub-venue"><em>SIGIR 2023.</em> <a href="#">Paper</a> | <a href="#">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,large-language-model,first-author">
    <div class="pub-title-row"><strong class="pub-title">Precise Zero-Shot Dense Retrieval without Relevance Labels</strong></div>
    <div class="pub-authors">Luyu Gao*, Xueguang Ma*, Jimmy Lin, Jamie Callan.</div>
    <div class="pub-venue"><em>ACL 2023.</em> <a href="https://aclanthology.org/2023.acl-long.99/">Paper</a> | <a href="https://github.com/texttron/hyde">Code</a> </div>
  </li>

  <!-- 2022 -->
  <li class="pub-oneline" data-tags="retrieval,ecir,2022">
    <div class="pub-title-row"><strong class="pub-title">Improving Query Representations for Dense Retrieval with Pseudo Relevance Feedback: A Reproducibility Study</strong></div>
    <div class="pub-authors">Hang Li, Shengyao Zhuang, Ahmed Mourad, Xueguang Ma, Jimmy Lin, Guido Zuccon.</div>
    <div class="pub-venue"><em>ECIR 2022.</em> <a href="https://dl.acm.org/doi/10.1007/978-3-030-99736-6_40">Paper</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,sigir,2022">
    <div class="pub-title-row"><strong class="pub-title">To interpolate or not to interpolate: Prf, dense and sparse retrievers</strong></div>
    <div class="pub-authors">Hang Li, Shuai Wang, Shengyao Zhuang, Ahmed Mourad, Xueguang Ma, Jimmy Lin, Guido Zuccon.</div>
    <div class="pub-venue"><em>SIGIR 2022.</em> <a href="https://dl.acm.org/doi/10.1145/3477495.3531884">Paper</a> | <a href="https://github.com/castorini/pyserini/blob/master/docs/experiments-vector-prf.md">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,trustnlp,2022">
    <div class="pub-title-row"><strong class="pub-title">An Encoder Attribution Analysis for Dense Passage Retriever in Open-Domain Question Answering</strong></div>
    <div class="pub-authors">Minghan Li, Xueguang Ma, Jimmy Lin.</div>
    <div class="pub-venue"><em>TrustNLP Workshop 2022.</em> <a href="https://aclanthology.org/2022.trustnlp-1.1/">Paper</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,ecir,first-author">
    <div class="pub-title-row"><strong class="pub-title">A Replication Study of Dense Passage Retriever</strong></div>
    <div class="pub-authors">Xueguang Ma, Kai Sun, Ronak Pradeep, Minghan Li, Jimmy Lin.</div>
    <div class="pub-venue"><em>ECIR 2022.</em> <a href="https://dl.acm.org/doi/10.1007/978-3-030-99736-6_41">Paper</a> | <a href="https://github.com/castorini/pyserini/blob/master/docs/experiments-dpr.md">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,sigir,first-author">
    <div class="pub-title-row"><strong class="pub-title">Document Expansions and Learned Sparse Lexical Representations for MS MARCO V1 and V2</strong></div>
    <div class="pub-authors">Xueguang Ma, Ronak Pradeep, Rodrigo Nogueira, Jimmy Lin.</div>
    <div class="pub-venue"><em>SIGIR 2022.</em> <a href="https://dl.acm.org/doi/10.1145/3477495.3531749">Paper</a> | <a href="https://github.com/castorini/pyserini/blob/master/docs/experiments-unicoil.md">Code</a> </div>
  </li>

  <!-- 2021 -->
  <li class="pub-oneline" data-tags="retrieval,sigir,2021">
    <div class="pub-title-row"><strong class="pub-title">Vera: Prediction techniques for reducing harmful misinformation in consumer health search</strong></div>
    <div class="pub-authors">Ronak Pradeep, Xueguang Ma, Rodrigo Nogueira, Jimmy Lin.</div>
    <div class="pub-venue"><em>SIGIR 2021.</em> <a href="https://dl.acm.org/doi/10.1145/3404835.3463120">Paper</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,sigir,2021">
    <div class="pub-title-row"><strong class="pub-title">Pyserini: A Python toolkit for reproducible information retrieval research with sparse and dense representations</strong></div>
    <div class="pub-authors">Jimmy Lin, Xueguang Ma, Sheng-Chieh Lin, Jheng-Hong Yang, Ronak Pradeep, Rodrigo Nogueira.</div>
    <div class="pub-venue"><em>SIGIR 2021.</em> <a href="https://dl.acm.org/doi/10.1145/3404835.3463238">Paper</a> | <a href="https://github.com/castorini/pyserini">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,desires,2021">
    <div class="pub-title-row"><strong class="pub-title">On the Separation of Logical and Physical Ranking Models for Text Retrieval Applications</strong></div>
    <div class="pub-authors">Jimmy Lin, Xueguang Ma, Joel Mackenzie, Antonio Mallia.</div>
    <div class="pub-venue"><em>DESIRES 2021.</em> <a href="https://openreview.net/forum?id=guQ0M0FdVT">Paper</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,multilingual,benchmark,arxiv,2021">
    <div class="pub-title-row"><strong class="pub-title">Mr. TyDi: A Multi-lingual Benchmark for Dense Retrieval</strong></div>
    <div class="pub-authors">Xinyu Zhang, Xueguang Ma, Peng Shi, Jimmy Lin.</div>
    <div class="pub-venue"><em>MRL Workshop 2021.</em> <a href="https://aclanthology.org/2021.mrl-1.12/">Paper</a> | <a href="https://github.com/castorini/mr.tydi">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval,emnlp,2021">
    <div class="pub-title-row"><strong class="pub-title">Simple and Effective Unsupervised Redundancy Elimination to Compress Dense Vectors for Passage Retrieval</strong></div>
    <div class="pub-authors">Xueguang Ma*, Minghan Li*, Kai Sun, Ji Xin, Jimmy Lin.</div>
    <div class="pub-venue"><em>EMNLP 2021.</em> <a href="https://aclanthology.org/2021.emnlp-main.227/">Paper</a> | <a href="https://github.com/castorini/pyserini/blob/master/docs/experiments-dpr.md">Code</a> </div>
  </li>
  <li class="pub-oneline" data-tags="retrieval">
    <div class="pub-title-row"><strong class="pub-title">Sparsifying Sparse Representations for Passage Retrieval by Top-k Masking</strong></div>
    <div class="pub-authors">Jheng-Hong Yang, Xueguang Ma, Jimmy Lin.</div>
    <div class="pub-venue"><em>ArXiv 2021.</em> <a href="https://arxiv.org/abs/2112.09628">Paper</a></div>
  </li>

  <li class="pub-oneline" data-tags="retrieval,arxiv,2021">
    <div class="pub-title-row"><strong class="pub-title">Scientific Claim Verification with VERT5ERINI</strong></div>
    <div class="pub-authors">Ronak Pradeep, Xueguang Ma, Rodrigo Nogueira, Jimmy Lin.</div>
    <div class="pub-venue"><em>LOUHI Workshop 2021.</em> <a href="https://aclanthology.org/2021.louhi-1.11/">Paper</a></div>
  </li>

</ul>

<!-- Include external CSS and JS files for publication filters -->
<link rel="stylesheet" href="{{ '/assets/css/publication-filters.css' | relative_url }}">
<script src="{{ '/assets/js/publication-filters.js' | relative_url }}"></script>



## Service

I actively serve as Reviewer for **ACL**, **NAACL**, **EMNLP**, **SIGIR**, **NeurIPS**.


I have served as Teaching Assistant for the following courses at the university of Waterloo:

**CS 116** Introduction to Computer Science (Fall 2022)  
**CS 246** Object-Oriented Software Development (Spring 2021)  
**CS 346** Application Development (Fall 2022, Winter 2023)  
**CS 350** Operating Systems (Winter 2024, Spring 2024)  
**CS 370** Numerical Computation (Fall 2021)  
**CS 371** Introduction to Computational Mathematics (Winter 2022)
