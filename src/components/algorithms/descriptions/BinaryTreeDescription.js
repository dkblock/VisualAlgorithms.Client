import React from "react";
import AlgorithmTimeComplexity from "../AlgorithmTimeComplexity";
import { getImageSrc } from "../../../utils/get-image-src";
import routes from "../../../utils/routes";
import { Link } from "react-router-dom";

const BinaryTreeDescription = (props) => {
    const { algorithm: { timeComplexity } } = props;

    return (
        <>
            <div>
                <div className="description-container">
                    <div className="col-9">
                        <div className="description-paragraph">
                            <b>Бинарное дерево поиска</b> — это двоичное дерево, для которого выполняются следующие
                            дополнительные условия (свойства дерева поиска):

                            <ul>
                                <li>Каждый узел имеет не более двух потомков.</li>
                                <li>У всех узлов левого поддерева произвольного узла X значения ключей данных меньше,
                                    чем значение ключа данных самого узла X.
                                </li>
                                <li>У всех узлов правого поддерева произвольного узла X значения ключей данных больше
                                    либо равны, чем значение ключа данных самого узла X.
                                </li>
                            </ul>
                        </div>
                        <div className="description-paragraph">
                            Основным преимуществом бинарного дерева поиска перед другими структурами данных является
                            возможная высокая эффективность реализации основанных на нём алгоритмов поиска и сортировки.
                        </div>
                    </div>
                    <div className="col-3">
                        <img
                            className="description-image"
                            src={getImageSrc("images/algorithms/binary-tree.png")}
                            alt="binary-tree"
                        />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="description-section-title">Определения</h3>
                <hr/>
                <div className="description-container">
                    <div className="col-9">
                        <div className="description-paragraph">
                            <b>Корневой узел</b> — это узел, находящийся на самом верхнем уровне и не являющийся
                            чьим-либо потомком (узел 8).<br/>
                            <b>Лист</b> — это узел, не имеющий дочерних элементов (узлы 1, 4, 10, 13).<br/>
                            <b>Внутренний узел</b> — это любой узел дерева, имеющий потомков, то есть, не являющийся
                            листовым узлом (узлы 8, 3, 5, 9, 12).<br/>
                            <b>Высота узла</b> — это длина наибольшего пути от него до дочернего узла, являющегося
                            листом.<br/>
                            <b>Высота дерева</b> — это длина наибольшего пути от корня к листу (высота дерева на примере
                            равна 3).<br/>
                        </div>
                    </div>
                    <div className="col-3">
                        <img
                            className="description-image"
                            src={getImageSrc("images/descriptions/binary-tree/example.png")}
                            alt="binary-tree example"
                        />
                        <h6 className="text-center">Простой пример бинарного дерева</h6>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="description-section-title">Основные операции</h3>
                <hr/>
                <div className="description-container">
                    <div className="col-9">
                        <div className="description-paragraph">
                            Основными операциями в бинарном дереве поиска являются:
                            <ul>
                                <li><i>INSERT(K, V)</i> — добавление в дерево пары (key, value) = (K, V).</li>
                                <li><i>FIND(K)</i> — поиск узла, в котором хранится пара (key, value) с key = K.</li>
                                <li><i>REMOVE(K)</i> — удаление узла, в котором хранится пара (key, value) с key = K.
                                </li>
                            </ul>
                        </div>
                        <div className="description-paragraph">
                            <h5>Вставка элемента</h5>
                            <b>Задача:</b> вставить пару (K, V) в дерево Т (при совпадении K, заменить V).<br/>
                            <b>Алгоритм:</b>
                            <ul>
                                <li>Если дерево пусто, заменить его на дерево с одним корневым узлом (K, V) и
                                    остановиться.
                                </li>
                                <li>
                                    Иначе сравнить K со значением ключа корневого узла X.
                                    <ul>
                                        <li>
                                            Если K>X, рекурсивно добавить (K, V) в правое поддерево Т.
                                        </li>
                                        <li>
                                            Если K&lt;X, рекурсивно добавить (K, V) в левое поддерево Т.
                                        </li>
                                        <li>
                                            Если K=X, заменить V текущего узла новым значением.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/insert.gif")}
                                    alt="binary-tree insert"
                                />
                                <h6 className="text-center">Вставка узла 42</h6>
                            </div>
                        </div>
                        <div className="description-paragraph">
                            <h5>Поиск элемента</h5>
                            <b>Задача:</b> проверить, есть ли узел с ключом K в дереве Т, и если да, то вернуть ссылку
                            на этот узел.<br/>
                            <b>Алгоритм:</b>
                            <ul>
                                <li>Если дерево пусто, сообщить, что узел не найден, и остановиться.</li>
                                <li>
                                    Иначе сравнить K со значением ключа корневого узла X.
                                    <ul>
                                        <li>
                                            Если K=X, выдать ссылку на этот узел и остановиться.
                                        </li>
                                        <li>
                                            Если K>X, рекурсивно искать ключ K в правом поддереве Т.
                                        </li>
                                        <li>
                                            Если K&lt;X, рекурсивно искать ключ K в левом поддереве Т.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/find.gif")}
                                    alt="binary-tree find"
                                />
                                <h6 className="text-center">Поиск узла 14</h6>
                            </div>
                        </div>
                        <div className="description-paragraph">
                            <h5>Удаление элемента</h5>
                            <b>Задача:</b> удалить из дерева Т узел с ключом K (если такой есть).<br/>
                            <b>Алгоритм:</b>
                            <ul>
                                <li>Если дерево T пусто, остановиться;</li>
                                <li>
                                    Иначе сравнить K со значением ключа корневого узла Х.
                                    <ul>
                                        <li>
                                            Если K>X, рекурсивно удалить K из правого поддерева Т;
                                        </li>
                                        <li>
                                            Если K&lt;X, рекурсивно удалить K из левого поддерева Т;
                                        </li>
                                        <li>
                                            Если K=X, то необходимо рассмотреть три случая:
                                            <ul>
                                                <li>
                                                    Если обоих детей нет, то удаляем текущий узел и обнуляем ссылку на
                                                    него у родительского узла;
                                                </li>
                                                <li>
                                                    Если одного из детей нет, то значения полей ребёнка m ставим вместо
                                                    соответствующих значений корневого узла;
                                                </li>
                                                <li>
                                                    Если оба ребёнка присутствуют, то:
                                                    <ul>
                                                        <li>
                                                            Если левый узел m правого поддерева отсутствует, то копируем
                                                            из правого узла в удаляемый поля K, V и ссылку на правый
                                                            узел правого потомка.
                                                        </li>
                                                        <li>
                                                            Иначе
                                                            <ul>
                                                                <li>
                                                                    Возьмём самый левый узел m правого поддерева;
                                                                </li>
                                                                <li>
                                                                    Скопируем данные (кроме ссылок на дочерние элементы)
                                                                    из m в X;
                                                                </li>
                                                                <li>
                                                                    Рекурсивно удалим узел m.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/remove.gif")}
                                    alt="binary-tree remove"
                                />
                                <h6 className="text-center">Удаление узла 18</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <AlgorithmTimeComplexity complexity={timeComplexity}/>
                    </div>
                </div>
                <div>
                    <h3 className="description-section-title">Обход дерева</h3>
                    <hr/>
                    <div className="description-container">
                        <div className="col-9">
                            <div className="description-paragraph">
                                <b>Обход дерева</b> — это процесс посещения каждого узла структуры дерева данных ровно
                                один раз.
                                Обход дерева итеративно проходит по всем узлам согласно некоторому алгоритму.
                                Поскольку из данного узла имеется более одного следующего узла, то некоторые узлы должны
                                быть отложены,
                                то есть запомнены некоторым способом для дальнейшего посещения.
                                Деревья можно обходить «в глубину» или «в ширину». Существует три основных способа
                                обхода «в глубину»:
                                <ul>
                                    <li>прямой (pre-order)</li>
                                    <li>центрированный (in-order)</li>
                                    <li>обратный (post-order)</li>
                                </ul>
                            </div>
                            <div className="description-paragraph">
                                <h5>Прямой обход</h5>
                                <ol>
                                    <li>Проверяем, не является ли текущий узел пустым или null.</li>
                                    <li>Показываем поле данных корня (или текущего узла).</li>
                                    <li>Обходим левое поддерево рекурсивно, вызвав функцию прямого обхода.</li>
                                    <li>Обходим правое поддерево рекурсивно, вызвав функцию прямого обхода.</li>
                                </ol>
                            </div>
                            <div className="description-paragraph">
                                <h5>Центрированный обход</h5>
                                <ol>
                                    <li>Проверяем, не является ли текущий узел пустым или null.</li>
                                    <li>Обходим левое поддерево рекурсивно, вызвав функцию центрированного обхода.</li>
                                    <li>Показываем поле данных корня (или текущего узла).</li>
                                    <li>Обходим правое поддерево рекурсивно, вызвав функцию центрированного обхода.</li>
                                </ol>
                                В двоичном дереве поиска центрированный обход извлекает данные в отсортированном
                                порядке.
                            </div>
                            <div className="description-paragraph">
                                <h5>Обратный обход</h5>
                                <ol>
                                    <li>Проверяем, не является ли текущий узел пустым или null.</li>
                                    <li>Обходим левое поддерево рекурсивно, вызвав функцию обратного обхода.</li>
                                    <li>Обходим правое поддерево рекурсивно, вызвав функцию обратного обхода.</li>
                                    <li>Показываем поле данных корня (или текущего узла).</li>
                                </ol>
                            </div>
                            <div className="description-paragraph">
                                <h5>Поиск в ширину</h5>
                                Деревья можно обходить также в порядке уровней, где мы посещаем каждый узел на уровне
                                прежде чем перейти на следующий уровень.
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/pre-order.png")}
                                    alt="binary-tree pre-order"
                                />
                                <h6 className="text-center">Прямой: F, B, A, D, C, E, G, I, H</h6>
                            </div>
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/in-order.png")}
                                    alt="binary-tree in-order"
                                />
                                <h6 className="text-center">Центрированный: A, B, C, D, E, F, G, H, I</h6>
                            </div>
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/post-order.png")}
                                    alt="binary-tree post-order"
                                />
                                <h6 className="text-center">Обратный: A, C, E, D, B, H, I, G, F</h6>
                            </div>
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/bfs.png")}
                                    alt="binary-tree bfs"
                                />
                                <h6 className="text-center">Поиск в ширину: F, B, G, A, D, I, C, E, H</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="description-section-title">Сбалансированные и несбалансированные деревья</h3>
                    <hr/>
                    <div className="description-container">
                        <div className="col-9">
                            <div className="description-paragraph">
                                <b>Сбалансированное дерево</b> — это такое дерево, для каждого узла которого количество
                                узлов в его левом и правом поддеревьях
                                различается не более, чем на 1 (рис. 1).
                            </div>
                            <div className="description-paragraph">
                                Само по себе бинарное дерево поиска не является сбалансированным деревом, и в худшем
                                случае вырождается в список (рис. 2).
                                При этом теряется производительность, поэтому для наилучшего быстродействия
                                желательно,чтобы глубина и левого, и правого поддеревьев
                                в каждом узле была примерно одинакова. Из-за этого ограничения на практике чаще всего
                                используются сбалансированные деревья (например, <Link
                                to={`${routes.algorithms}/avl-tree`}>AVL-дерево</Link> или <Link
                                to={`${routes.algorithms}/red-black-tree`}>красно-чёрное дерево</Link>).
                            </div>
                            <div className="description-paragraph">
                                Однако обычные бинарные деревья также могут оказаться полезны. Как показывает практика,
                                они ничем не уступают сбалансированным
                                деревьям при работе со случайным неупорядоченным набором данных. В совокупности с их
                                довольно простой реализацией, это позволяет
                                сделать выбор в пользу обычных бинарных деревьев (именно на наборе случайных данных).
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/balanced.png")}
                                    alt="binary-tree balanced"
                                />
                                <h6 className="text-center">Сбалансированное дерево</h6>
                            </div>
                            <div className="description-image-container">
                                <img
                                    className="description-image"
                                    src={getImageSrc("images/descriptions/binary-tree/unbalanced.png")}
                                    alt="binary-tree unbalanced"
                                />
                                <h6 className="text-center">Несбалансированное дерево</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BinaryTreeDescription;