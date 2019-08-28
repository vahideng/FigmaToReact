const vectorMap = {};
const vectorList = [];
const vectorTypes = ['VECTOR', 'LINE', 'REGULAR_POLYGON', 'ELLIPSE', 'STAR'];

 function preprocessTree(node) {
 
    
    let vectorsOnly =null

    let vectorVConstraint = null;
    let vectorHConstraint = null;
  


if ( node.name.indexOf('Aleph') > -1 ) {
    
} else {
     vectorsOnly = node.name;
}
    
   
    function paintsRequireRender(paints) {
      console.log(paints,"paints");
      
      if (!paints) return false;
  
      let numPaints = 0;
      for (const paint of paints) {
        if (paint.visible === false) continue;
  
        numPaints++;
        if (paint.type === 'EMOJI') return true;
      }
  
      return numPaints > 1;
    }
  
    if (paintsRequireRender(node.fills) ||
        paintsRequireRender(node.strokes) ||
        (node.blendMode != null && ['PASS_THROUGH', 'NORMAL'].indexOf(node.blendMode) < 0)) {
      node.type = 'VECTOR';
    }
  
    const children = node.children && node.children.filter((child) => child.visible !== false);
    if (children) {
      for (let j=0; j<children.length; j++) {
        if (vectorTypes.indexOf(children[j].type) < 0) vectorsOnly = false;
        else {
          if (vectorVConstraint != null && children[j].constraints.vertical != vectorVConstraint) vectorsOnly = false;
          if (vectorHConstraint != null && children[j].constraints.horizontal != vectorHConstraint) vectorsOnly = false;
          vectorVConstraint = children[j].constraints.vertical;
          vectorHConstraint = children[j].constraints.horizontal;
        }
      }
    }
    node.children = children;
  
    if (children && children.length > 0 && vectorsOnly) {
      node.type = 'VECTOR';
      node.constraints = {
        vertical: vectorVConstraint,
        horizontal: vectorHConstraint,
      };
    }
  
    if (vectorTypes.indexOf(node.type) >= 0) {
      node.type = 'VECTOR';
      vectorMap[node.id] = node;
      vectorList.push(node.id);
      node.children = [];
    }
  
    if (node.children) {
      for (const child of node.children) {
        preprocessTree(child);
      }
    }
  }

  module.exports = preprocessTree