import { BackButton } from "../BackButton/BackButton";
import { ToTheTopButton } from "../ToTheTopButton/ToTheTopButton";
import { ArticleSideBar } from "../ArticleSideBar/ArticleSideBar";
import css from "../css/implementationPage.module.css";
import { useRef } from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("javascript", js);

export const ImplementationLinkedList = () => {
  const articleLinks = useRef<HTMLAnchorElement[]>([]);
  const codeStringLinkedListClass = `
class LinkedList {
  constructor() {
    this.head = null;
  }
}

const linkedList = new LinkedList();
console.log(linkedList);
// Output: linkedList { head: null }
`;

  const codeStringNodeFactoryMethod = `
  createNode(data, next) {
    return { data, next };
  }
`;

  const codeStringAppendMethod = `
  addFirstNode(data) {
    this.head = this.createNode(data, this.head);
  }

  append(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = this.createNode(data, null);
    }
  }

  linkedList.append(7);
  console.log(linkedList);
  /* 
  Output: 
  linkedList { head: { data: 7, next: null } }
  */
`;

  const codeStringPrependMethod = `
  prepend(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else {
      const node = this.createNode(data, null);
      node.next = this.head;
      this.head = node;
    }
  }

  linkedList.prepend(7);
  linkedList.prepend(1);
  console.log(linkedList);
  // { head: { data: 1, next: { data: 7, next: null } } }
`;

  const codeStringInsertAfterMethod = `
  insertAfter(key, data) {
    let node = this.head;
    while (node && node.data !== key) {
      node = node.next;
    }
    if (node) {
      node.next = this.createNode(data, node.next);
    }
  }
`;

  const codeStringInsertBeforeMethod = `
  insertBefore(key, data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === key) {
      this.prepend(data);
      return;
    }
    let previousNode = null;
    let node = this.head;
    while (node && node.data !== key) {
      previousNode = node;
      node = node.next;
    }
    if (node) {
      previousNode.next = this.createNode(data, node);
    }
  }`;

  const codeStringRemoveFirstMethod = `
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }`;

  const codeStringRemoveLastMethod = `
  removeLast() {
    if (this.head) {
      if (!this.head.next) {
        this.removeFirst();
        return;
      }
    }
    let node = this.head;
    while (node.next) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }`;

  const codeStringRemoveItemMethod = `
    removeItem(key) {
    if (this.head) {
      let targetNode = this.head;
      let nextNode = targetNode.next;
      while (nextNode && nextNode.data != key) {
        targetNode = nextNode;
        nextNode = nextNode.next;
      }
      if (this.head.data === key) {
        this.removeFirst();
      } else if (nextNode) {
        if (nextNode.data === key) {
          targetNode.next = nextNode.next;
        }
      }
    }
  }`;

  const codeStringFullCodeLinkedList = `
class LinkedList {
  constructor() {
    this.head = null;
  }

  createNode(data, next) {
    return { data, next };
  }

  addFirstNode(data) {
    this.head = this.createNode(data, this.head);
  }

  append(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = this.createNode(data, null);
    }
  }

  prepend(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else {
      const node = this.createNode(data, null);
      node.next = this.head;
      this.head = node;
    }
  }

  insertAfter(key, data) {
    let node = this.head;
    while (node && node.data !== key) {
      node = node.next;
    }
    if (node) {
      node.next = this.createNode(data, node.next);
    }
  }

  insertBefore(key, data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === key) {
      this.prepend(data);
      return;
    }
    let previousNode = null;
    let node = this.head;
    while (node && node.data !== key) {
      previousNode = node;
      node = node.next;
    }
    if (node) {
      previousNode.next = this.createNode(data, node);
    }
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (this.head) {
      if (!this.head.next) {
        this.removeFirst();
        return;
      }
    }
    let node = this.head;
    while (node.next) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }

  removeItem(key) {
    if (this.head) {
      let targetNode = this.head;
      let nextNode = targetNode.next;
      while (nextNode && nextNode.data != key) {
        targetNode = nextNode;
        nextNode = nextNode.next;
      }
      if (this.head.data === key) {
        this.removeFirst();
      } else if (nextNode) {
        if (nextNode.data === key) {
          targetNode.next = nextNode.next;
        }
      }
    }
  }
}`;

  return (
    <main className={css["pageContainer"]} id="pageContainer">
      <ArticleSideBar className={css["sideBar"]} articleLinks={articleLinks} />
      <article className={css["article"]} id="article">
        <a className={css["headline"]} href="#headline" id="headline">
          Implementing Linked List
        </a>
        <img
          className={css["articleImage"]}
          src="/public/LinkedList.png"
          alt="image"
        />
        <a
          className={css["paragraph"]}
          id="Introduction"
          href="#Introduction"
          ref={(element) => {
            articleLinks.current[0] = element as HTMLAnchorElement;
          }}
        >
          Introduction
        </a>
        <p className={css["text"]}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A linked list is a data
          structure that consists of a sequence of nodes, where each node
          contains a value and a reference to the next node in the sequence. The
          first node in the sequence is called the head, and the last node is
          called the tail. Linked lists are useful because they allow for
          efficient insertion and deletion of elements, since only the
          references to the affected nodes need to be updated. They also have a
          dynamic size, meaning that they can grow or shrink as needed without
          requiring contiguous memory allocation. There are several types of
          linked lists, including singly linked lists, doubly linked lists, and
          circular linked lists. In a singly linked list, each node has a
          reference to the next node in the sequence, but not to the previous
          node. In a doubly linked list, each node has references to both the
          next and previous nodes in the sequence. In a circular linked list,
          the tail node has a reference back to the head node, forming a loop.
          Linked lists are commonly used in programming languages and computer
          science, and are often used to implement other data structures such as
          stacks, queues, and hash tables. In this tutorial we will implement a
          simple, singly linked list in javascript.
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Linked List class"
          href="#Linked List class"
          ref={(element) => {
            articleLinks.current[1] = element as HTMLAnchorElement;
          }}
        >
          Linked List class
        </a>
        <p className={css["text"]}>
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringLinkedListClass}
          </SyntaxHighlighter>
          <p className={css["text"]}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The linked list is usually
            implemented as a class with head property. the head property points
            to the first element (also known as the 'first node') in the list.
            It is used to maintain the start position of the list. By having
            access to the head pointer, we can easily traverse through the
            remaining nodes in the list, starting from the beginning. However,
            if the linked list is empty, then the head would simply point to
            null. That means no nodes exist in the list yet.
            <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When working with
            linked lists, we often manipulate the values stored within
            individual nodes, delete nodes from the list, insert new nodes at
            various positions, and so on - but always using the head pointer as
            the entry point into the list. Understanding the role of the head
            pointer is essential when learning and implementing linked lists.
          </p>
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Adding Nodes"
          href="#Adding Nodes"
          ref={(element) => {
            articleLinks.current[2] = element as HTMLAnchorElement;
          }}
        >
          Adding Nodes
        </a>
        <img
          className={css["linkedListNodeImage"]}
          src="/public/LinkedListNode.png"
          alt="image"
        />
        <p className={css["text"]}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To add nodes to our linked
          list we will creat a factory method that will return a node object
          with two properties: Data property that wil hold the node value and
          Next property which is a pointer that will point to the next node.
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringNodeFactoryMethod}
          </SyntaxHighlighter>
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Append"
          href="#Append"
          ref={(element) => {
            articleLinks.current[3] = element as HTMLAnchorElement;
          }}
        >
          Append
        </a>
        <p className={css["text"]}>
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringAppendMethod}
          </SyntaxHighlighter>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The addFirstNode method
          creates a new node using this.createNode(data, this.head), where data
          represents the value we want to store in the new node. This newly
          created node becomes the new head of our linked list by updating its
          reference to the current head node, which was previously referenced
          through the this.head property. On the other hand, the append method
          finds the last node in our linked list by iteratively traversing all
          nodes until a node without a next reference is found. Once the final
          node has been identified, a new node containing the specified data
          value is added after this final node by updating the next reference of
          the previous node's next property to be the new node. By separating
          out the logic for adding the first versus the last node, we ensure
          that regardless of the position in the list, our insertion operation
          remains consistent and efficient.
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Prepend"
          href="#Prepend"
          ref={(element) => {
            articleLinks.current[4] = element as HTMLAnchorElement;
          }}
        >
          Prepend
        </a>
        <p className={css["text"]}>
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringPrependMethod}
          </SyntaxHighlighter>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The prepend() method enables
          us to add a new node with the provided data to the beginning of the
          linked list. Starting off with checking if the head pointer is null
          (i.e., the linked list is currently empty), if true, then the
          addFirstNode() function gets invoked to append the new node as the
          very first element of the linked list. If the linked list already has
          some elements, the createNode() function generates a new node object
          with the specified data and sets its next pointer initially to null.
          Afterwards, the next pointer of the existing head node is assigned to
          reference the newly appended node. Finally, the head pointer itself is
          reassigned to point directly to the new node rather than referencing
          the old head.
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Insert After"
          href="#Insert After"
          ref={(element) => {
            articleLinks.current[5] = element as HTMLAnchorElement;
          }}
        >
          Insert After
        </a>
        <p className={css["text"]}>
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringInsertAfterMethod}
          </SyntaxHighlighter>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The linked list method
          "insertAfter" adds a new node containing the specified data after the
          node whose data matches a certain key. First, we start by initializing
          a variable node and assigning it the value of the head pointer of our
          linked list. We traverse through the linked list until we find a node
          whose data exactly equals the given key, while storing references to
          each node as we progress down the chain. Once we locate the desired
          location where the new node should be inserted, we call upon the
          createNode() function to generate a new node object with the supplied
          data parameter. Following this creation step, the next pointer of the
          found node is set to reference the newly generated node, ensuring the
          continuity of the linked list. In summary, the insertAfter() operation
          provides the capability to dynamically insert new elements into
          specific positions within the linked list based on their relative
          position from other elements, allowing for more advanced functionality
          compared to simple sequential insertion methods commonly used in
          traditional arrays.
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Insert Before"
          href="#Insert Before"
          ref={(element) => {
            articleLinks.current[6] = element as HTMLAnchorElement;
          }}
        >
          Insert Before
        </a>
        <p className={css["text"]}>
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringInsertBeforeMethod}
          </SyntaxHighlighter>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The insertBefore() function
          performs similar tasks to those of the insertAfter() method but
          differs slightly in that it inserts a new node containing the
          specified data immediately preceding the node which contains the
          matching key. The implementation begins with several basic checks to
          determine whether the linked list is empty or the head node already
          corresponds to the intended target location. Depending on these
          conditions, different actions are taken - returning without any action
          at all if the linked list is empty, or calling the prepend() method if
          the head node needs to become the new first node due to matching the
          targeted key. Otherwise, two variables called previousNode and node
          are initialized respectively to store the current and next nodes in
          order. These nodes are traversed using a loop construct until either
          the end of the linked list is reached or the desired node is located
          according to the matching key condition. At this point, when a match
          is successfully found, a new node is created via the createNode()
          function and connected between the last visited node (i.e.,
          previousNode) and the current node (i.e., node). This ensures that the
          resulting linked list retains its integrity and continues operating
          correctly even after adding or removing various elements. Hence, the
          insertBefore() feature permits users to easily manipulate the data
          stored in a linked list by facilitating the insertion of new nodes
          right before existing ones.
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Remove First"
          href="#Remove First"
          ref={(element) => {
            articleLinks.current[7] = element as HTMLAnchorElement;
          }}
        >
          Remove First
        </a>
        <p className={css["text"]}>
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringRemoveFirstMethod}
          </SyntaxHighlighter>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The removeFirst() method
          represents an essential tool to efficiently delete the first element
          of the linked list. It starts by performing a check to ensure that
          there actually exists a head pointer to remove, preventing potential
          errors caused by attempting to access non-existent memory locations.
          Then, assuming that there is a head pointer available, its contents
          are temporarily saved in a variable, followed by updating the head
          pointer to now point towards the second element of the linked list
          instead of the original first one. Essentially, this operation
          detaches the first node from the rest of the linked list without
          affecting its overall structure.
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Remove Last"
          href="#Remove Last"
          ref={(element) => {
            articleLinks.current[8] = element as HTMLAnchorElement;
          }}
        >
          Remove Last
        </a>
        <p className={css["text"]}>
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringRemoveLastMethod}
          </SyntaxHighlighter>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The removeLast() method
          implemented in linked lists allows us to delete the final item from a
          sequence without altering the preceding items. This function employs
          an iterative strategy involving traversal along the linked list from
          the starting node until the second-to-last node is found. Its basic
          logic can be broken down into three main components: initialization,
          iteration, and termination conditions. First, we establish an initial
          state using two variables: this.head and a local node pointer. Then,
          we initiate a while loop that will run continuously until we reach
          either the end of the linked list (signaled by a null next attribute)
          or the second-to-last node (which is identified via the absence of an
          immediately subsequent node). During each iteration, we move forward
          along the chain using the next property and update our working node
          pointer accordingly. Finally, when the loop concludes, we verify that
          the current node indeed points to the second-to-last node and remove
          the connection between this node and the true final node by setting
          the former's next pointer to null.
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Remove Item"
          href="#Remove Item"
          ref={(element) => {
            articleLinks.current[9] = element as HTMLAnchorElement;
          }}
        >
          Remove Item
        </a>
        <p className={css["text"]}>
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringRemoveItemMethod}
          </SyntaxHighlighter>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition to removing the
          last element from a linked list, the removeItem() function offers a
          useful means for eliminating specific nodes based on their contents.
          Implemented through a combination of control flow statements,
          conditional expressions, and targeted updates to the linked list
          structure, this method enables us to search for and remove desired
          values with precision. The general framework underlying the
          removeItem() operation involves establishing an initial set of
          pointers, including targetNode, which initially references the head of
          the linked list, and nextNode, whose purpose is to track progress
          during the iterative portion of the algorithm. After initializing
          these variables, the function enters into a while loop designed to
          traverse through the linked list one node at a time. With each
          iteration, targetNode advances according to its own next pointer,
          while nextNode follows along behind it. By comparing the data
          contained within nextNode against the specified input key, we can
          determine whether or not this particular node matches what we are
          looking for. If so, depending upon where nextNode falls relative to
          targetNode, appropriate modifications must be made to sever its
          connection with the remainder of the linked list. In cases where
          nextNode corresponds precisely to the head of the linked list, we
          invoke the removeFirst() method instead to ensure proper handling of
          exceptional situations. Overall, the removeItem() function constitutes
          a crucial component for supporting complex data management tasks
          within linked lists, facilitating efficient and effective removal of
          unwanted items regardless of their position within the overall
          structure.
        </p>
        <div className={css["dividingLine"]} />
        <a
          className={css["paragraph"]}
          id="Consclusion"
          href="#Consclusion"
          ref={(element) => {
            articleLinks.current[10] = element as HTMLAnchorElement;
          }}
        >
          Conclusion
        </a>
        <p className={css["text"]}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a final thought regarding
          singly linked lists, it's important to recognize both their strengths
          and limitations. On the positive side, these dynamic data structures
          allow us to add, delete, and manipulate elements quickly and
          efficiently, making them ideal for applications such as real-time
          processing or resource allocation. They also provide a relatively
          compact representation compared to other storage techniques, enabling
          fast access times and low memory overhead. However, linked lists can
          sometimes suffer from slower insertion/deletion operations due to the
          need to update multiple node addresses when modifying the list.
          Additionally, traversal can potentially require significant resources
          since the entire list must often be examined sequentially rather than
          via randomized indexing. Despite these considerations, singly linked
          lists remain a fundamental building block of computer science,
          providing programmers with a flexible and adaptable toolset for
          designing complex algorithms and solving challenging problems across a
          wide range of application domains.
          <br></br>
          <br></br>
          Full code:
          <SyntaxHighlighter
            className={css["code"]}
            language="javascript"
            style={nord}
          >
            {codeStringFullCodeLinkedList}
          </SyntaxHighlighter>
        </p>
        <div className={css["dividingLine"]} />
        <div className={css["emptySpace"]}></div>
        <div className={css["emptySpace"]}></div>
        <div className={css["emptySpace"]}></div>
      </article>
      <nav className={css["navigationButtons"]}>
        <ToTheTopButton
          className={css["toTheTopButton"]}
          IDofElementToObserve="#headline"
          link="#headline"
        />
        <BackButton link={"/LinkedList"} className={css["backButton"]} />
      </nav>
    </main>
  );
};
