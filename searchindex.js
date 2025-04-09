Search.setIndex({"docnames": ["components/ops", "index", "what_is_xformers"], "filenames": ["components/ops.rst", "index.rst", "what_is_xformers.rst"], "titles": ["xFormers optimized operators", "Welcome to xFormers\u2019s documentation!", "What is xFormers?"], "terms": {"class": 0, "op": 0, "attentionopbas": 0, "sourc": [0, 2], "base": [0, 1], "baseoper": 0, "ani": [0, 2], "see": 0, "fmha": 0, "cutlass": 0, "fwop": 0, "bwop": 0, "flash": 0, "triton": 0, "classmethod": 0, "not_supported_reason": 0, "d": 0, "input": 0, "list": 0, "str": 0, "return": 0, "reason": 0, "why": 0, "thi": [0, 2], "support": 0, "The": 0, "kernel": 0, "can": [0, 1, 2], "run": 0, "onli": 0, "empti": 0, "memory_efficient_attent": 0, "queri": 0, "tensor": 0, "kei": 0, "valu": [0, 2], "attn_bia": 0, "option": [0, 1], "union": 0, "attentionbia": 0, "none": 0, "p": 0, "float": 0, "0": 0, "scale": 0, "tupl": 0, "type": 0, "attentionfwopbas": 0, "attentionbwopbas": 0, "output_dtyp": 0, "dtype": 0, "mechan": 0, "follow": [0, 2], "self": 0, "doe": 0, "Not": 0, "need": 0, "o": 0, "n": 0, "2": 0, "shape": 0, "must": 0, "format": 0, "b": 0, "m": 0, "h": 0, "k": 0, "where": 0, "batch": 0, "size": 0, "sequenc": 0, "length": 0, "number": 0, "head": 0, "embed": 0, "per": 0, "If": 0, "have": 0, "dimens": 0, "3": 0, "assum": 0, "ar": [0, 1, 2], "1": 0, "also": [0, 2], "5": 0, "gqa": 0, "note": 0, "below": 0, "contigu": 0, "we": 0, "requir": 0, "last": 0, "s": 0, "stride": 0, "equival": 0, "pytorch": [0, 1], "code": 0, "transpos": 0, "attn": 0, "softmax": 0, "f": 0, "dropout": 0, "exampl": 0, "import": 0, "xop": 0, "comput": 0, "regular": 0, "y": 0, "q": 0, "v": 0, "With": 0, "causal": 0, "lowertriangularmask": 0, "hardwar": 0, "nvidia": 0, "gpu": 0, "capabl": 0, "abov": 0, "6": 0, "p100": 0, "datatyp": 0, "f16": 0, "bf16": 0, "f32": 0, "experiment": 0, "us": 0, "multi": 0, "mqa": 0, "group": 0, "an": 0, "featur": 0, "forward": 0, "pass": 0, "you": [0, 2], "16": 0, "provid": 0, "dim": 0, "g": 0, "here": 0, "8": 0, "pleas": 0, "automat": [0, 2], "broadcast": 0, "so": [0, 2], "manual": 0, "befor": 0, "call": 0, "torch": 0, "32": 0, "128": 0, "kwarg": 0, "dict": 0, "devic": 0, "cuda": 0, "float16": 0, "randn": 0, "out_gqa": 0, "reshap": 0, "4": 0, "expand": 0, "rais": 0, "notimplementederror": 0, "mha": 0, "valueerror": 0, "invalid": 0, "paramet": 0, "mq": 0, "mkv": 0, "kv": 0, "bia": 0, "appli": 0, "matrix": 0, "default": 0, "mask": 0, "For": 0, "common": 0, "arbitrari": 0, "slower": 0, "probabl": 0, "disabl": 0, "set": 0, "factor": 0, "recommend": 0, "dispatch": 0, "best": 0, "depend": 0, "larg": 0, "includ": 0, "without": 0, "tensorcor": 0, "old": 0, "sm60": 0, "ck": 0, "compos": [0, 2], "ck_decod": 0, "256": 0, "fit": 0, "regist": 0, "test": [0, 2], "work": 0, "mi250x": 0, "file": 0, "contain": 0, "argument": 0, "essenti": 0, "which": [0, 1, 2], "ad": 0, "t": 0, "goal": 0, "custom": 0, "made": 0, "instead": 0, "dens": 0, "want": 0, "avoid": 0, "load": 0, "from": 0, "perform": 0, "abl": 0, "know": 0, "hand": 0, "part": [0, 1], "eg": 0, "some": [0, 1], "veri": 0, "blockdiagonalmask": 0, "object": 0, "That": 0, "function": 0, "ha": 0, "abil": 0, "add": 0, "qk": 0, "calcul": 0, "n_queri": 0, "given": [0, 2], "most": 0, "case": 0, "zero": 0, "neg": 0, "infin": 0, "form": 0, "attend": 0, "children": 0, "defin": [0, 2], "altern": 0, "thing": 0, "when": 0, "materi": 0, "hardcod": 0, "better": 0, "lowertriangularfrombottomrightmask": 0, "lowertriangularmaskwithtensorbia": 0, "blockdiagonalcausalmask": 0, "int": 0, "float32": 0, "cpu": 0, "slow": 0, "don": 0, "attempt": 0, "make": 0, "fast": [0, 2], "debug": 0, "should": 0, "like": 0, "q_seqlen": 0, "k_seqlen": 0, "localattentionfrombottomrightmask": 0, "window_left": 0, "window_right": 0, "A": 0, "local": [0, 2], "posit": 0, "window": 0, "_left": 0, "_right": 0, "num": 0, "_queri": 0, "_kei": 0, "print": 0, "exp": 0, "4x4": 0, "4x5": 0, "illustr": 0, "total": 0, "exactli": 0, "same": 0, "differ": 0, "triangular": 0, "shift": 0, "In": 0, "other": [0, 2], "word": 0, "cannot": [0, 2], "nearer": 0, "final": 0, "than": 0, "between": 0, "left": 0, "right": 0, "thei": [0, 1], "becom": 0, "equal": 0, "make_local_attent": 0, "window_s": 0, "lowertriangularfrombottomrightlocalattentionmask": 0, "creat": [0, 1], "new": [0, 2], "combin": [0, 1], "_window_s": 0, "both": 0, "whose": 0, "distanc": 0, "x": 0, "either": 0, "less": 0, "i": 0, "e": 0, "greater": 0, "green": 0, "area": 0, "grei": 0, "out": 0, "q_seqinfo": 0, "_seqleninfo": 0, "k_seqinfo": 0, "_batch_siz": 0, "block": [0, 1, 2], "diagon": 0, "each": [0, 2], "divid": 0, "handl": 0, "via": 0, "from_tensor_list": 0, "list_x": 0, "linear": 0, "nn": 0, "unbind": 0, "list_out": 0, "split": 0, "assert": 0, "from_seqlen": 0, "kv_seqlen": 0, "concaten": 0, "back": 0, "vari": 0, "m_i": 0, "all": [0, 2], "correspond": 0, "along": 0, "sum_i": 0, "invers": 0, "token": 0, "possibl": 0, "make_caus": 0, "make_causal_from_bottomright": 0, "blockdiagonalcausalfrombottomrightmask": 0, "prefix": 0, "blockdiagonalcausallocalattentionmask": 0, "make_local_attention_from_bottomright": 0, "blockdiagonalcausallocalattentionfrombottomrightmask": 0, "start": 0, "bottom": 0, "except": 0, "nor": 0, "one": [0, 2], "farther": 0, "initi": 0, "allow": [0, 2], "num_kei": 0, "num_queri": 0, "otherwis": 0, "vector": 0, "inf": 0, "blockdiagonalpaddedkeysmask": 0, "_paddedseqleninfo": 0, "pad": 0, "space": 0, "12": 0, "three": 0, "max": 0, "first": 0, "kv_pad": 0, "causal_diagon": 0, "upperbound": 0, "individu": 0, "unus": 0, "bc": 0, "blockdiagonalcausalwithoffsetpaddedkeysmask": 0, "offset": 0, "blockdiagonalcausallocalattentionpaddedkeysmask": 0, "more": [0, 2], "further": 0, "pagedblockdiagonalpaddedkeysmask": 0, "block_tabl": 0, "page_s": 0, "page": 0, "batch_siz": 0, "max_num_pag": 0, "num_head": 0, "head_dim": 0, "num_group": 0, "pagedblockdiagonalcausalwithoffsetpaddedkeysmask": 0, "blockdiagonalgappykeysmask": 0, "_gappyseqinfo": 0, "gappi": 0, "kv_seqstart": 0, "make_pag": 0, "notional_pad": 0, "paged_typ": 0, "pagedblockdiagonalgappykeysmask": 0, "our": 0, "actual": 0, "live": 0, "separ": 0, "convert": 0, "version": 0, "blockdiagonalcausalwithoffsetgappykeysmask": 0, "unlik": 0, "address": 0, "element": 0, "were": 0, "do": 0, "two": 0, "100": 0, "chang": 0, "ignor": 0, "would": 0, "101": 0, "200": 0, "But": 0, "pagedblockdiagonalcausalwithoffsetgappykeysmask": 0, "pattern": 0, "band": 0, "its": 0, "_subtensor": 0, "attentionbiassubtensor": 0, "lower": 0, "aka": 0, "static": 0, "__new__": 0, "cl": 0, "context": 0, "mistak": 0, "add_bia": 0, "addit": 0, "memory_efficient_attention_parti": 0, "output": 0, "lse": 0, "style": 0, "extra": 0, "data": 0, "log": 0, "sum": 0, "merg": 0, "merge_attent": 0, "obtain": 0, "against": [0, 2], "disjoint": 0, "warn": 0, "backward": 0, "quit": 0, "restrict": 0, "particular": 0, "weren": 0, "anywher": 0, "attn_split": 0, "lse_split": 0, "write_ls": 0, "bool": 0, "true": 0, "get": 0, "whole": 0, "http": 0, "arxiv": 0, "org": 0, "ab": 0, "2402": 0, "05099": 0, "result": 0, "out_ful": 0, "out1": 0, "lse1": 0, "out2": 0, "lse2": 0, "lse_ful": 0, "chunk": 0, "kq": 0, "singl": 0, "num_chunk": 0, "whether": 0, "attn_out": 0, "lse_out": 0, "memory_efficient_attention_backward": 0, "grad": 0, "gradient": 0, "dq": 0, "dk": 0, "dv": 0, "explan": 0, "memory_efficient_attention_forward_requires_grad": 0, "memory_efficient_attention_forward": 0, "later": 0, "librari": [1, 2], "host": 1, "flexibl": [1, 2], "transform": [1, 2], "interoper": [1, 2], "optim": [1, 2], "build": [1, 2], "state": [1, 2], "art": [1, 2], "model": [1, 2], "focus": 2, "field": 2, "agnost": 2, "design": 2, "ideal": 2, "break": 2, "inspir": 2, "zoo": 2, "refer": 2, "studi": 2, "ablat": 2, "architectur": 2, "search": 2, "extens": 2, "aim": 2, "being": 2, "easi": 2, "extend": 2, "focu": 2, "specif": 2, "improv": 2, "easili": 2, "compar": 2, "reus": 2, "across": 2, "domain": 2, "mean": 2, "engin": 2, "effort": 2, "And": 2, "sinc": 2, "measur": 2, "benchmark": 2, "heavi": 2, "everi": 2, "variant": 2, "repo": 2, "alon": 2, "relev": 2, "happen": 2, "anytim": 2, "somebodi": 2, "propos": 2, "through": 2, "pr": 2, "crowd": 2, "realli": 2, "welcom": 2, "move": 2, "too": 2, "anyth": 2}, "objects": {"xformers": [[0, 0, 0, "-", "ops"]], "xformers.ops": [[0, 1, 1, "", "AttentionOpBase"], [0, 0, 0, "module-0", "fmha"], [0, 3, 1, "", "memory_efficient_attention"]], "xformers.ops.AttentionOpBase": [[0, 2, 1, "", "not_supported_reasons"]], "xformers.ops.fmha": [[0, 0, 0, "-", "attn_bias"], [0, 0, 0, "-", "ck"], [0, 0, 0, "-", "ck_decoder"], [0, 0, 0, "-", "ck_splitk"], [0, 0, 0, "-", "cutlass"], [0, 0, 0, "-", "flash"], [0, 3, 1, "", "memory_efficient_attention_backward"], [0, 3, 1, "", "memory_efficient_attention_forward"], [0, 3, 1, "", "memory_efficient_attention_forward_requires_grad"], [0, 3, 1, "", "memory_efficient_attention_partial"], [0, 3, 1, "", "merge_attentions"]], "xformers.ops.fmha.attn_bias": [[0, 1, 1, "", "AttentionBias"], [0, 1, 1, "", "BlockDiagonalCausalFromBottomRightMask"], [0, 1, 1, "", "BlockDiagonalCausalLocalAttentionFromBottomRightMask"], [0, 1, 1, "", "BlockDiagonalCausalLocalAttentionMask"], [0, 1, 1, "", "BlockDiagonalCausalLocalAttentionPaddedKeysMask"], [0, 1, 1, "", "BlockDiagonalCausalMask"], [0, 1, 1, "", "BlockDiagonalCausalWithOffsetGappyKeysMask"], [0, 1, 1, "", "BlockDiagonalCausalWithOffsetPaddedKeysMask"], [0, 1, 1, "", "BlockDiagonalGappyKeysMask"], [0, 1, 1, "", "BlockDiagonalMask"], [0, 1, 1, "", "BlockDiagonalPaddedKeysMask"], [0, 1, 1, "", "LocalAttentionFromBottomRightMask"], [0, 1, 1, "", "LowerTriangularFromBottomRightLocalAttentionMask"], [0, 1, 1, "", "LowerTriangularFromBottomRightMask"], [0, 1, 1, "", "LowerTriangularMask"], [0, 1, 1, "", "LowerTriangularMaskWithTensorBias"], [0, 1, 1, "", "PagedBlockDiagonalCausalWithOffsetGappyKeysMask"], [0, 1, 1, "", "PagedBlockDiagonalCausalWithOffsetPaddedKeysMask"], [0, 1, 1, "", "PagedBlockDiagonalGappyKeysMask"], [0, 1, 1, "", "PagedBlockDiagonalPaddedKeysMask"]], "xformers.ops.fmha.attn_bias.AttentionBias": [[0, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalCausalWithOffsetGappyKeysMask": [[0, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalCausalWithOffsetPaddedKeysMask": [[0, 2, 1, "", "from_seqlens"]], "xformers.ops.fmha.attn_bias.BlockDiagonalGappyKeysMask": [[0, 2, 1, "", "from_seqlens"], [0, 2, 1, "", "make_paged"], [0, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalMask": [[0, 2, 1, "", "from_seqlens"], [0, 2, 1, "", "from_tensor_list"], [0, 2, 1, "", "make_causal"], [0, 2, 1, "", "make_causal_from_bottomright"], [0, 2, 1, "", "make_local_attention"], [0, 2, 1, "", "make_local_attention_from_bottomright"], [0, 2, 1, "", "materialize"], [0, 2, 1, "", "split"]], "xformers.ops.fmha.attn_bias.BlockDiagonalPaddedKeysMask": [[0, 2, 1, "", "from_seqlens"], [0, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.LowerTriangularFromBottomRightMask": [[0, 2, 1, "", "make_local_attention"]], "xformers.ops.fmha.attn_bias.LowerTriangularMask": [[0, 2, 1, "", "__new__"], [0, 2, 1, "", "add_bias"]], "xformers.ops.fmha.attn_bias.PagedBlockDiagonalGappyKeysMask": [[0, 2, 1, "", "from_seqlens"], [0, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.PagedBlockDiagonalPaddedKeysMask": [[0, 2, 1, "", "from_seqlens"], [0, 2, 1, "", "materialize"]], "xformers.ops.fmha.ck": [[0, 1, 1, "", "BwOp"], [0, 1, 1, "", "FwOp"]], "xformers.ops.fmha.ck_decoder": [[0, 1, 1, "", "FwOp"]], "xformers.ops.fmha.cutlass": [[0, 1, 1, "", "BwOp"], [0, 1, 1, "", "FwOp"]], "xformers.ops.fmha.flash": [[0, 1, 1, "", "BwOp"], [0, 1, 1, "", "FwOp"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "titleterms": {"xformer": [0, 1, 2], "optim": 0, "oper": 0, "memori": 0, "effici": 0, "attent": 0, "avail": 0, "implement": 0, "bias": 0, "partial": 0, "non": 0, "autograd": 0, "welcom": 1, "s": 1, "document": 1, "what": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})